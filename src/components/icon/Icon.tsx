import iconsSprite from '../../assets/images/iconsSprite.svg';
type Props = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};
export const Icon = ({ iconId, width = '50px', height = '50px', viewBox = '0 0 50 50' }: Props) => {
  if (iconId === 'react') {
    viewBox = '0 0 113 101';
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </svg>
  );
};
