import { useParams } from 'react-router-dom';
import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';
import {
  EditableProfilePageHeader,
} from '@/features/EditableProfileCard/ui/EditableProfilePageHeader/EditableProfilePageHeader';
import { EditableProfileCard } from '@/features/EditableProfileCard';

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <PageWrapper>
      <EditableProfilePageHeader />
      <EditableProfileCard id={id} />
    </PageWrapper>
  );
};

export default ProfilePage;
