import { useRouter } from 'next/router';

function Index() {
  const router = useRouter();
  const { id } = router.query;

  return <div>WHAT {id}?</div>
}

export default Index