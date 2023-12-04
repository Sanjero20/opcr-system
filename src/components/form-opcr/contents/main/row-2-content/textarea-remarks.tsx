import TextArea from 'react-textarea-autosize';

function EditableTextArea() {
  return <TextArea className="resize-none p-1" minRows={2} />;
}

export default EditableTextArea;
