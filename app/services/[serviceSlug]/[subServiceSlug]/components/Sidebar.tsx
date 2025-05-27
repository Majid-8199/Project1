// components/SubServiceSidebar.tsx
import React from 'react';
import Link from 'next/link';
import { SubServiceDetail } from '../../../../interfaces/services';

interface SubServiceSidebarProps {
  subServices: SubServiceDetail[];
  parentServiceSlug: string;
  currentSubServiceSlug: string;
}

const SubServiceSidebar: React.FC<SubServiceSidebarProps> = ({
  subServices,
  parentServiceSlug,
  currentSubServiceSlug,
}) => {
  return (
    <aside className="bg-white rounded-lg shadow-md p-6 sticky top-24"> {/* sticky for better UX */}
      <h4 className="text-xl font-bold text-darkGray mb-6">
        Other Services
      </h4>
      <nav>
        <ul className="space-y-3">
          {subServices.map((subService) => (
            <li key={subService.slug}>
              <Link
                href={`/services/${parentServiceSlug}/${subService.slug}`}
                className={`flex items-center justify-between p-3 rounded-md transition-colors duration-200
                  ${currentSubServiceSlug === subService.slug
                    ? 'bg-primaryGreen text-white font-semibold shadow-md'
                    : 'text-darkGray hover:bg-lightGray'
                  }`}
              >
                <span>{subService.title}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SubServiceSidebar;