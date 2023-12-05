import { useOpcr } from '@/stores/opcr-store';
import TextArea from 'react-textarea-autosize';

function EditableTextArea() {
  const { status } = useOpcr();

  return (
    <TextArea
      className="resize-none p-1"
      minRows={2}
      placeholder={status !== 'calibrating' ? '' : 'Add comment'}
      disabled={status !== 'calibrating'}
    />
  );
}

export default EditableTextArea;
