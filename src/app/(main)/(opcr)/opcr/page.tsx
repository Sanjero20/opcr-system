import FormOpcr from '@/components/form-opcr/form-opcr';

function OpcrPage() {
  return (
    <div className="flex h-full flex-col gap-2">
      <h1 className="title">OPCR FORM PREVIEW</h1>

      <FormOpcr />

      <div className="flex gap-2">{/* Button navigators */}</div>
    </div>
  );
}

export default OpcrPage;
