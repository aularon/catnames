export const imageSrc = (imageId: number, size?: number) =>
  size
    ? // PNG
      `https://openclipart.org/image/${size}px/${imageId}`
    : // SVG
      `https://openclipart.org/download/${imageId}`;
