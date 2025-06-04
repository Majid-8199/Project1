import Link from 'next/link';
import { contactInfo } from '../data/contacts';

const HeaderContacts = () => {
  return (
    <div
      className="flex justify-end gap-5 items-center text-white px-2 py-1 md:pr-5 text-sm"
      style={{
        background:
          'linear-gradient(to right, #FFFFFF 0%, #059669 50%, #EB1D26 100%)',
      }}
    >
      <div className="flex items-center gap-3 md:gap-5">
        {contactInfo.map((item, index) => {
          const Icon = item.icon;
          const key = item.id || index;

          if (!Icon && item.text) {
            return (
              <span
                key={key}
                className="mx-1 text-xs sm:text-sm whitespace-nowrap"
              >
                {item.text}
              </span>
            );
          }

          if (item.url) {
            return (
              <Link
                key={key}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs sm:text-sm"
                aria-label={item.text || 'External link'}
                title={item.text || 'Open link'}
              >
                {Icon && <Icon size={15} aria-hidden="true" focusable="false" />}
                {item.text && <span className="hidden sm:inline">{item.text}</span>}
              </Link>
            );
          }

          return (
            <div
              key={key}
              className="flex items-center gap-1 text-xs sm:text-sm"
              aria-label={item.text || 'Contact info'}
              title={item.text || ''}
            >
              {Icon && <Icon size={15} aria-hidden="true" focusable="false" />}
              {item.text && <span>{item.text}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderContacts;
