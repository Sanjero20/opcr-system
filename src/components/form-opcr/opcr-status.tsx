import { useOpcr } from '@/stores/opcr-store';

function OPCRStatus() {
  const { status } = useOpcr();
  return <p className="font-bold capitalize text-zinc-800">Status: {status}</p>;
}

export default OPCRStatus;
