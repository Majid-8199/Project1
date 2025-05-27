import contactInfo from '../data/contacts';

const HeaderContacts = () => {
  return (
    <div
      className="flex justify-end gap-5 items-center text-white px-2 py-1 md:pr-5 text-sm"
      style={{
        background: 'linear-gradient(to right, #FFFFFF 0%, #11AB5D 50%, #FF0000 100%)',
      }}
    >
      <div className="flex items-center gap-3 md:gap-5">
        {contactInfo.map((item, index) => {
          const IconComponent = item.icon;

          if (!IconComponent && item.text) {
            return (
              <span key={index} className="mx-1">
                {item.text}
              </span>
            );
          }

          return (
            <div key={index} className="flex items-center">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <IconComponent size={15} />
                  {item?.text && <p className='text-xs hidden sm:block pb-'>{item.text}</p>}
                </a>
              ) : (
                <div className="flex items-center gap-1 text-xs">
                  <IconComponent size={15} />
                  {item.text && <span>{item.text}</span>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderContacts;
