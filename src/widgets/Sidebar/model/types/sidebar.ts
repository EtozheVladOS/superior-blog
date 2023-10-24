import { TransaltionNames } from '@/shared/constants/translationNames';

export interface SidebarItemType {
  path: string;
  text: string;
  translationName: TransaltionNames;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}
