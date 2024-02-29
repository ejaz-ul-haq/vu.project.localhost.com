import React, {useState, useEffect, useCallback, useRef} from "react";
import {Spin} from "antd";

// interface IProps {
//   videoId: string;
//   autoPlay?: boolean;
//   title: string;
// }

const ActiveStaffMembersScreenCreateVideoIframe = (props) => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []); //empty dependency array so it only runs once at render


  const {iframeUrl} = props;
  console.log('iframeUrl');
  console.log(iframeUrl);
  const iframeRef = useRef(null);
  const defaultHeight = 495;
  const [videoHeight, setVideoHeight] = useState(
    iframeRef.current ? iframeRef.current.offsetWidth * 0.5625 : defaultHeight
  );

  const handleChangeVideoWidth = useCallback(() => {
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
          ? 1.2
          : window.innerWidth > 400
            ? 1.45
            : 1.85;
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight;
    return setVideoHeight(Math.floor(height * ratio));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleChangeVideoWidth);
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
          ? 1.2
          : window.innerWidth > 400
            ? 1.45
            : 1.85;
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight;
    setVideoHeight(Math.floor(height * ratio));
    return function cleanup() {
      window.removeEventListener("resize", handleChangeVideoWidth);
    };
  }, [videoHeight, handleChangeVideoWidth]);

  return (
    <Spin spinning={loading} delay={500}>
      <iframe
        ref={iframeRef}
        // title={title}
        width="100%"
        height={`${videoHeight}px`}
        src={iframeUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={
          () => {
            setLoading(false)
          }
        }
      />
    </Spin>
  );
};

export default ActiveStaffMembersScreenCreateVideoIframe;
