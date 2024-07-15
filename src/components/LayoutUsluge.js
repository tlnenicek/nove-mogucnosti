import { useRouter, useSearchParams } from 'next/navigation';

const LayoutUsluge = ({ children }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const section = searchParams.get('section') || 'start'; // Default to 'start' if no section is provided

    const navigateToSection = (section) => {
        router.push(`/services?section=${section}`);
    };

    const getNavItemClass = (navItem) => {
        return navItem === section
            ? 'cursor-pointer text-navItem aboutNumber border-b-4 border-orange-500 flex-grow text-center pb-2'
            : 'cursor-pointer text-navItem hover:border-b-4 border-b-2 border-gray-300 flex-grow text-center pb-2';
    };

    return (
        <div className="bg-gray-100 min-h-screen w-full flex flex-col items-center justify-center">
            <nav className="w-full mt-14">
                <div className="flex justify-center">
                    <div className="w-full max-w-4xl">
                        <ul className="flex justify-around p-4">
                            <li className={getNavItemClass('start')} onClick={() => navigateToSection('start')}>Start</li>
                            <li className={getNavItemClass('tim')} onClick={() => navigateToSection('tim')}>Tim</li>
                            <li className={getNavItemClass('zrelost')} onClick={() => navigateToSection('zrelost')}>Zrelost</li>
                            <li className={getNavItemClass('rast')} onClick={() => navigateToSection('rast')}>Rast</li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="w-full flex justify-center p-8 md:p-12">
                    {children}
            </div>
        </div>
    );
};

export default LayoutUsluge;
