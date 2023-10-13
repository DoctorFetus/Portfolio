import { Icon } from '../../../../components/icon/Icon';

type Props = {
  title: string;
  icon?: string;
};
export const Skill = ({ title, icon }: Props) => {
  return (
    <div>
      <Icon iconId={icon || 'react'} />
      {title}
    </div>
  );
};
