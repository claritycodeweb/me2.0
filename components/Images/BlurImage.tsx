import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ isLoading: boolean }>`
  transition-duration: 0.7s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  filter: blur(30px) grayscale(1);
  ${({ isLoading }) =>
    !isLoading &&
    css`
      color: red;
      filter: blur(0);
    `}
`;

const BlurImage = ({
  className,
  ...rest
}: { className?: string } & ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Wrapper className={className} isLoading={isLoading}>
      <Image
        {...rest}
        alt={rest.alt}
        onLoadingComplete={() => setLoading(false)}
        placeholder="blur"
        blurDataURL={`/_next/image?url=${rest.src}&w=16&q=1`}
      />
    </Wrapper>
  );
};

export default BlurImage;
