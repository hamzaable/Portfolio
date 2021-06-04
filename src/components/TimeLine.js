import React, { useEffect } from 'react';
import Layout from './Layout';
import * as d3 from 'd3';

import '../assets/styles/timeline.css';
const TimeLine = () => {
  const containerRef = React.createRef();
  const data = [
    {
      title: 'Started learning Html/CSS',
      date: 'Jan 22, 2020',
      svg: 'undraw_static_website_0107',
    },
    {
      title: 'Created First Webpage',
      date: 'Feb 09, 2020',
      svg: 'undraw_web_developer_p3e5',
      link: 'https://zarghamkhandev.github.io/psdtohtml2/',
      linkText: 'Open Here',
    },
    {
      title: 'Started Learning Javascript',
      date: 'Feb 13, 2020',
      svg: 'undraw_code_review_l1q9',
    },
    {
      title: 'Created Github Account',
      date: 'Feb 21, 2020',
      svg: 'undraw_developer_activity_bv83',
      link: 'https://github.com/zarghamkhandev',
      linkText: 'Check my Profile',
    },
    {
      title: 'My First Javascript App',
      date: 'Apr 8, 2020',
      svg: 'undraw_time_management_30iu',
      link: 'https://nostalgic-hodgkin-b8da7a.netlify.app/',
      linkText: 'Click Here',
    },
    {
      title: 'Started Learning React',
      date: 'Apr 18, 2020',
      svg: 'undraw_react_y7wq',
    },
    {
      title: 'React App using Tailwindcss',
      date: 'May 26, 2020',
      svg: 'undraw_tailwind_css_1egw',
      link: 'https://zarghamkhandev.github.io/Job-Listing-App/',
      linkText: 'Open Here',
    },
    {
      title: 'Created porfolio Website',
      date: 'June 14, 2020',
      svg: 'undraw_portfolio_website_lidw',
    },
    {
      title: 'Completed First Freelance Task',
      date: 'July 15, 2020',
      svg: 'undraw_confirmation_2uy0',
      link: 'https://hopeful-kalam-d54694.netlify.app/',
      linkText: 'Check it Out',
    },
    {
      title: 'Started Learning Angular & D3js',
      date: 'July 21, 2020',
      svg: 'undraw_JavaScript_frameworks_8qpc',
    },
    {
      title: 'First Angular App',
      date: 'August 24, 2020',
      svg: 'undraw_setup_analytics_8qkl',
      link: 'https://elastic-haibt-6c19a8.netlify.app/',
      linkText: 'Check it Out',
    },
    {
      title: 'Landed job as working student',
      date: 'Sep 1, 2020',
      svg: 'undraw_Beer_celebration_cefj',
    },
    {
      title: 'Started Learning MySQL',
      date: 'Sep 4, 2020',
      svg: 'undraw_server_status_5pbv',
    },
    {
      title: 'Full Stack App with Sequelize',
      date: 'Sep 11, 2020',
      svg: 'undraw_To_the_stars_qhyy',
      link: 'https://code-gig-123.herokuapp.com/',
      linkText: 'Check here',
    },
    {
      title: 'Started Learning Graphql/Apollo Server',
      date: 'Sep 24, 2020',
      svg: 'undraw_futuristic_interface_4q3p',
    },
  ];

  data.reverse();

  data.forEach((item, i) => {
    if (i === 0) {
      item.id = i;
    } else {
      item.id = i;
      item.parentId = i - 1;
    }
  });

  const createChart = () => {
    const linkHeight = +getComputedStyle(
      document.documentElement
    ).getPropertyValue('--linkHeight');
    console.log(linkHeight);
    const treeWidth = containerRef.current.getBoundingClientRect().width;
    const treeHeight = (data.length - 1) * linkHeight;
    containerRef.current.style.height = treeHeight + 'px';
    const cover = d3.select(containerRef.current);
    cover.select('div').remove();
    const container = cover.append('div').attr('class', 'tree-container');
    const stratify = d3
      .stratify()
      .id((d) => d.id)
      .parentId((d) => d.parentId);
    const rootNodeData = stratify(data);
    const tree = d3.tree().size([treeWidth, treeHeight - 100]);
    const treeData = tree(rootNodeData);
    const nodes = container.selectAll('.node').data(treeData.descendants());
    const links = container.selectAll('.link').data(treeData.links());
    const toolTips = container
      .selectAll('.tooltip')
      .data(treeData.descendants());
    const toolBox = container
      .selectAll('.toolbox')
      .data(treeData.descendants());

    nodes
      .enter()
      .append('div')
      .attr('class', 'node')
      .attr(
        'style',
        (d) =>
          `position:absolute;
    left: ${d.x}px;
    top: ${d.y}px;
    z-index:1;
    display:inline-block;
    `
      );

    links
      .enter()
      .append('div')
      .attr('class', 'link')
      .attr(
        'style',
        (d) => `
      position:absolute;
      top: ${d.source.y}px;
      left: ${d.source.x}px;
      bottom: ${d.target.y}px;
      border-left: 0.5px solid rgba(74, 74, 74);
      height: ${d.target.y - d.source.y}px;
      z-index:0;
      display:inline-block;

      `
      );
    toolTips
      .enter()
      .append('div')
      .attr('class', 'tooltip')
      .attr(
        'style',
        (d, i) => `
      position: absolute;
      top: ${d.y - 6}px;
      left: ${i % 2 === 0 ? d.x + 12 : d.x - 20}px;
      width: 0px;
      height: 0px;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      ${
        i % 2 === 0
          ? 'border-right: 8px solid rgba(74, 74, 74);'
          : 'border-left: 8px solid rgba(74, 74, 74);'
      }
      
      `
      );
    const toolBoxContainer = toolBox
      .enter()
      .append('div')
      .attr('class', 'toolbox flex ')
      .attr(
        'style',
        (d, i) => `
        position: absolute;
        background-color:white;
        top: ${d.y - 16}px;
        left: ${
          i % 2 === 0
            ? d.x + 12 + 8 + 'px'
            : 'calc(' + d.x + 'px - var(--width) - 20px)'
        };
        padding: 5px;
        border: 1px solid rgba(74, 74, 74);
        border-radius: 7px;
        font-size: 13px;
        line-height: 1.26666667;
      `
      );

    toolBoxContainer
      .append('div')
      .attr('class', 'w-1/3 items-center svgDiv hidden md:flex')
      .append('img')
      .attr('class', 'cardImg')
      .attr('src', (d) => require(`../assets/svgs/${d.data.svg}.svg`));

    const textContainer = toolBoxContainer
      .append('div')
      .attr('class', 'flex-1 textDiv flex flex-col justify-center');
    textContainer
      .append('p')
      .attr(
        'class',
        'text-darkPurple text-center text-xxs sm:text-sm md:text-base inline-block font-medium mx-auto'
      )
      .text((d) => d.data.title);
    textContainer
      .append('p')
      .attr(
        'class',
        'text-mygray text-xxs sm:text-sm font-medium inline-block mx-auto mt-1'
      )
      .text((d) => d.data.date);

    textContainer
      .append('a')
      .attr('href', (d) => (d.data.link ? d.data.link : ''))
      .attr('target', '_blank')
      .attr(
        'class',
        'text-mygray text-xxs sm:text-sm font-medium mx-auto inline-block underline mt-0 sm:mt-2 md:mt-4 lg:mt-6'
      )
      .text((d) => (d.data.linkText ? d.data.linkText : ''));

    // append svgs to boxes
  };

  useEffect(() => {
    createChart();
    window.addEventListener('resize', createChart);
    return () => window.removeEventListener('resize', createChart);
  });

  return (
    <Layout>
      <div
        className="mt-8 relative w-full md:w-3/4 md:mx-auto timeline-container"
        ref={containerRef}></div>
    </Layout>
  );
};

export default TimeLine;
