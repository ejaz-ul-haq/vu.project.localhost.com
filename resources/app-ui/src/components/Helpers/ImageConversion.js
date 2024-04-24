import { useState, useEffect, useRef } from "react";


export const getFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};


export const getBase64 = (info) => {
    return  new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(info.file.originFileObj);
        reader.onload = () => {
            const base64String = reader.result;
            console.log('DataURL: test', base64String);
            resolve(base64String);
        };
        reader.onerror = (error) => reject(error);
    });

};

