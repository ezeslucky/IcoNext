import Link from 'next/link';
import { ModeToggle } from '../ui/theme-toggle';
import { HeaderGithub } from './github';



const Header = () => {
  return (
    <header className="py-4 font-mono">
      <div className="container w-full flex items-center justify-between h-full">
      
        <Link href="/" className="flex items-center gap-2">
      
          <h1 className="text-base">IcoNext
</h1>
        </Link>
      
          
        <div className="flex items-center gap-2">
          <ModeToggle />
          <HeaderGithub />
        </div>
      </div>
    </header>
  );
};

export { Header };
