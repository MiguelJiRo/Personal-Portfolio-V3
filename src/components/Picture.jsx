const Picture = ({ source, alt, className, imgClassName, sizes, fetchPriority, ...rest }) => {
  const imgProps = {
    alt,
    sizes,
    ...(fetchPriority && { fetchpriority: fetchPriority }),
    ...rest,
  };

  if (!source?.sources) {
    return (
      <img
        src={source?.img?.src ?? source}
        className={imgClassName ?? className}
        {...imgProps}
      />
    );
  }

  const { sources, img } = source;

  return (
    <picture className={className}>
      {sources.avif && <source type="image/avif" srcSet={sources.avif} sizes={sizes} />}
      {sources.webp && <source type="image/webp" srcSet={sources.webp} sizes={sizes} />}
      <img
        src={img.src}
        srcSet={img.srcset}
        width={img.w}
        height={img.h}
        className={imgClassName}
        {...imgProps}
      />
    </picture>
  );
};

export default Picture;
