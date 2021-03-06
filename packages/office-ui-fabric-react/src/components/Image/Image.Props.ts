import * as React from 'react';

export interface IImageProps extends React.HTMLProps<HTMLImageElement> {
  /**
   * If true, fades the image in when loaded.
   * @defaultvalue false;
   */
  shouldFadeIn?: boolean;

  /**
   * If true, the image starts as visible and is hidden on error. Otherwise, the image is hidden until
   * it is successfully loaded. This disables shouldFadeIn.
   * @defaultvalue false;
   */
  shouldStartVisible?: boolean;

  /**
   * If provided, adds the indicated css class to the image.
   */
  className?: string;

  /**
   * Used to determine how the image is scaled and cropped to fit the frame.
   *
   * @defaultvalue If both dimensions are provided, then the image is fit using ImageFit.scale. Otherwise, the
   * image won't be scaled or cropped.
   */
  imageFit?: ImageFit;

  /**
   * @deprecated
   * Deprecated at v1.3.6, to be removed at >= v2.0.0.
   * To replace the src in case of errors, use onLoadingStateChange instead and rerender the Image with a 
   * difference src.
   */
  errorSrc?: string;

  /**
   * If true, the image frame will expand to fill its parent container.
   */
  maximizeFrame?: boolean;

  /**
   * Optional callback method for when the image load state has changed.
   * The 'loadState' parameter indicates the current state of the Image.
   */
  onLoadingStateChange?: (loadState: ImageLoadState) => void;
}

/**
 * The possible methods that can be used to fit the image.
 */
export enum ImageFit {
  /**
   * The image is not scaled. The image is centered and cropped within the content box.
   */
  center = 0,

  /**
   * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
   * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
   * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
   */
  contain = 1,

  /**
   * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped from
   * the top and bottom, or from the sides, depending on the difference in aspect ratio between the image and the frame.
   */
  cover = 2,

  /**
   * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
   * frame will have empty space.
   */
  none = 3
}

export enum ImageLoadState {
  /**
   * The image has not yet been loaded, and there is no error yet.
   */
  notLoaded = 0,

  /**
   * The image has been loaded successfully.
   */
  loaded = 1,

  /**
   * An error has been encountered while loading the image.
   */
  error = 2,

  /**
   * @deprecated
   * Deprecated at v1.3.6, to be removed at >= v2.0.0.
   * To replace the src in case of errors, use onLoadingStateChange instead and rerender the Image with a 
   * difference src.
   */
  errorLoaded = 3
}
