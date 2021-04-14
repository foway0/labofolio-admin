import Link from 'next/link';

function Routes() {
  return (
    <ul>
      <li>
        <Link href="/test/hoge">
          <a> hoge </a>
        </Link>
      </li>
    </ul>
  )
}

export default Routes