<?php

namespace App\Helpers;

use Request;
use File;

class UploadHelper
{

  /**
   * Upload Any Types of File.
   *
   * It's not checking the file type which may be checked before pass here in validation
   *
   * @param  string $f               request with file
   * @param  binary $file            file
   * @param  string $name            filename
   * @param  string $target_location location where file will store
   * @return string                  filename
   */
//  public static function upload($f, $file, $name, $target_location)
//  {
//    if (Request::hasFile($f)) {
//      $filename = $name . '.' . $file->getClientOriginalExtension();
//      $extension = $file->getClientOriginalExtension();
//        $file->move($target_location, $filename);
//      return $filename;
//    } else {
//      return null;
//    }
//  }


  /**
   * Update File
   * @param  string $f               request with file
   * @param  binary $file            file
   * @param string $name             filename
   * @param  string $target_location location where file will store
   * @param  string $old_location    file location which will delete
   * @return string                  filename
   */
//  public static function update($f, $file, $name, $target_location, $old_location)
//  {
//    //delete the old file
//    $target_location = $target_location . '/';
//    if (File::exists($target_location . $old_location)) {
//      File::delete($target_location . $old_location);
//    }
//    $filename = $name . '.' . $file->getClientOriginalExtension();
//    $file->move($target_location, $filename);
//    return $filename;
//  }


  /**
   * delete file
   * @param  type $location file location that will delete
   * @return type                  null
   */
  public static function deleteFile($location)
  {
    if (File::exists($location)) {
      File::delete($location);
    }
  }


    public static function getFileExtensionFromBase64($base64String)
    {
        // Extract the MIME type from the base64 string
        preg_match('/^data:image\/(\w+);base64,/', $base64String, $matches);

        if (!isset($matches[1])) {
            // If MIME type is not found, return null or handle the error as needed
            return null;
        }

        // Map common image MIME types to file extensions
        $mimeToExt = [
            'jpeg' => 'jpg',
            'png' => 'png',
            'gif' => 'gif',
            // Add more MIME types as needed
        ];

        $extension = $mimeToExt[$matches[1]] ?? null;

        return $extension;
    }

    public static function upload( $base64String, $fileName, $targetLocation ){

        // Decode base64 image
        $image = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $base64String));
        $extension = self::getFileExtensionFromBase64($base64String);

        // Generate unique filename
        $filename = $fileName. '.'.$extension; // You can use any desired file extension

        // Save image to storage
//            $path = storage_path('images/destinations/' . $filename);
        $path = public_path($targetLocation.'/'. $filename);
        file_put_contents($path, $image);

        $uploaded_file_url = asset($targetLocation.'/' . $filename);

        return $uploaded_file_url;

    }


}
