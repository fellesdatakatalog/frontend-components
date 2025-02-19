import * as React from 'react';
import {
  Image as FabricImage,
  IImageProps
} from 'office-ui-fabric-react/lib-commonjs/Image';

interface ImageProps extends IImageProps {}
/**
 * @visibleName Image (Bilde)
 */
const Image: React.FC<ImageProps> = props => {
  const { children, className, ...rest } = props;
  return (
    <FabricImage {...rest} className={className}>
      {children}
    </FabricImage>
  );
};

export default Image;
