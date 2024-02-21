import React from 'react';
import DiscussCard from '../DiscussCard';
import {discourseBaseURL, developerWebsiteDomain} from '../../../util/util';

import {getCatagories} from '../../../services/DiscourseService';


export default function Catagories() {
  const [catIntegrationTypeData, setCatIntegrationTypeData] = React.useState();

  const getDiscourseCatagories = async () => {
    const data = await getCatagories();
    const catIntegrationType = [];

    for (const category of categoryData.category_list.categories) {
      for (const subCategory of category.subcategory_list) {
        catIntegrationType.push({
          name: subCategory.name,
          slug: subCategory.slug,
        });
      }
    }
    setCatIntegrationTypeData(catIntegrationType);
  };

  React.useEffect(() => {
    getDiscourseCatagories();
  }, []);

  if (catIntegrationTypeData) {
    return (
      <div className={styles.discussCardContainer}>
        {catIntegrationTypeData.map((item, index) => (
          <DiscussCard
            key={index}
            title={item.name}
            link={developerWebsiteDomain() + '/c/' + item.slug}
          />
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}
