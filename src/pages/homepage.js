import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Autoplay from 'embla-carousel-autoplay';
import {Card, CardContent} from '@site/src/components/ui/card';
import {Catagories} from '@site/src/components/homepage/Catagories';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@site/src/components/ui/carousel';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const carouselItems = [
    {
      title: 'Welcome to the SailPoint Developer Community',
      description:
        'The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.',
      buttonText: 'Get Started',
      link: '/getting-started',
    },
    {
      title: 'Welcome to the SailPoint Developer Community',
      description:
        'The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.',
      buttonText: 'Get Started',
      link: '/getting-started',
    },
  ];
  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <div className="h-1/2">
          <Carousel
            className="h-1/2 justify-center content-center"
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 7000,
              }),
            ]}>
            <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square justify-center content-center">
                        <div className="mt-96">
                          <span className="text-6xl font-semibold mt-56 underline decoration-solid underline-offset-[18px]">
                            {item.title}
                          </span>
                          <p className="text-xl font-semibold mt-16">
                            {item.description}
                          </p>
                          <div className={styles.button}>
                            <Link className={styles.link} to={item.link}>
                              {item.buttonText}
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="w-16 ml-16 bg-transparent border-none text-7xl pb-[55%]" />
            <CarouselNext className="w-16 mr-16 bg-transparent border-none text-7xl pb-[55%]" />
          </Carousel>
        </div>
      </main>
    </Layout>
  );
}
