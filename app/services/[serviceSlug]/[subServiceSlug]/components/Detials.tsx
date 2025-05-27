// components/SubServiceDetails.tsx (Reusing BlogDetails' content rendering logic)
import React from 'react';
import { SubServiceDetail, ContentParagraph, ContentHeading, ContentHeadingWithList } from '../../../../interfaces/services';

interface SubServiceDetailsProps {
  subService: SubServiceDetail;
}

const SubServiceDetails: React.FC<SubServiceDetailsProps> = ({ subService }) => {
  const renderContent = () => {
    return subService.content.map((block, index) => {
      // Type guards to narrow down the block type
      if ('paragraph' in block && !('heading' in block)) { // This specifically handles ContentParagraph
        const paragraphBlock = block as ContentParagraph;
        return <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraphBlock.paragraph }} />;
      } else if ('heading' in block && 'list' in block) { // This handles ContentHeadingWithList
        const listBlock = block as ContentHeadingWithList;
        return (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-bold text-darkGray mt-8 mb-4">{listBlock.heading}</h3>
            {listBlock.paragraph && <p className="mb-4" dangerouslySetInnerHTML={{ __html: listBlock.paragraph }} />}
            {listBlock.list && (
              <ul className="list-disc list-inside ml-4 mt-2 text-mediumGray">
                {listBlock.list.map((item, liIndex) => (
                  <li key={liIndex} className="mb-2">
                    <strong>{item.text}</strong> {item.description}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      } else if ('heading' in block) { // This handles ContentHeading (which might have an optional paragraph)
        const headingBlock = block as ContentHeading;
        return (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-bold text-darkGray mt-8 mb-4">{headingBlock.heading}</h3>
            {headingBlock.paragraph && <p className="mb-4" dangerouslySetInnerHTML={{ __html: headingBlock.paragraph }} />}
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      {/* Dynamic Service Types (e.g., New/Renew/Cancel for Residential Visa) */}
      {subService.serviceTypes && subService.serviceTypes.length > 0 && (
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-darkGray mb-4">Service Types:</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {subService.serviceTypes.map((type, index) => (
              <div key={index} className="border border-primaryRed rounded-lg p-4 text-center">
                <h5 className="font-bold text-darkGray mb-2">{type.type}</h5>
                <p className="text-sm text-mediumGray">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {renderContent()}

      {/* Call to Action at the bottom of details */}
      <div className="text-center mt-12">
        <button className="px-8 py-4 bg-primaryGreen text-white font-bold rounded-full shadow-lg hover:bg-darkGreen transition-all duration-300 transform hover:scale-105">
          Get Started with {subService.title}
        </button>
      </div>
    </div>
  );
};

export default SubServiceDetails;