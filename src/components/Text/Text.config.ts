export enum size {
  Small = 'SMALL',
  Medium = 'MEDIUM',
  Large = 'LARGE'
}

export const fontStyle = (textSize?: size) => {
  const selectedSize = textSize || size.Medium

  switch (selectedSize) {
    case size.Small:
      return {
        lineHeight: '10px',
        size: '10px'
      }
    case size.Medium:
      return {
        lineHeight: '12px',
        size: '12px'
      }
    case size.Large:
      return {
        lineHeight: '14px',
        size: '14px'
      }
  }
}
