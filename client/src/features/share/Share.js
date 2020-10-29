import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ViewPort, LeftResizable, Fill, Right, Info } from 'react-spaces';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import ProfileBar from './ProfileBar';
//import Showcase from './Showcase';
import ShareContentItem from './ShareContentItem'; // Component probably needs to be edited to suit share view
import Section from './Section';
import Skeleton from 'react-loading-skeleton';

import { getShareId } from '../../common/helpers';

import { getSharepage } from '../share/shareSlice';

export default function Share() {

  const dispatch = useDispatch();
  const shareid = getShareId(window.location.href);
  const gettingSharepage = useSelector(state => state.app.loading.getSharepage);

  // Reloading content
  useEffect(() => {
      async function fetch() { dispatch(getSharepage(shareid)) };
      fetch();
  }, [dispatch, shareid]);

  const share = useSelector(state => state.share);

  const [profilebarState, setProfilebarState] = useState({ collapsed: false, title: 'showcase' });
  const [profilebarWidth, setProfilebarWidth] = useState(300);
  const [focusedContent, setFocusedContent] = useState({});
  const [focusedContentWidth, setFocusedContentWidth] = useState(0);
  const [inFocusedState, setFocusedState] = useState(false);
  const [viewSection, setViewSection] = useState('showcase');
  const [viewStates, setViewStates] = useState({
    showcase: true,
    education: false,
    experience: false,
    projects: false
  });



  // Showcase Simulator®
  /**
  const randInt = x => Math.floor(Math.random() * x);
  const showcase = [
    share.content[randInt(share.content.length)],
    share.content[randInt(share.content.length)],
    share.content[randInt(share.content.length)],
    share.content[randInt(share.content.length)]
  ];
  **/
  
  // Handler for changing sidebar type when its width is adjusted
  const handleInfo = info => {

    if (info.width <= 150 && !profilebarState.collapsed) setProfilebarState({ ...profilebarState, collapsed: true });
    else if (info.width > 150 && profilebarState.collapsed) setProfilebarState({ ...profilebarState, collapsed: false });

    // Fix scroll position if focused on a content item
    if (inFocusedState) scrollToContentItem(focusedContent.id);
  }

  // Handler for scrolling to a section by clicking in the sidebar
  const scrollToSection = section => document.getElementsByClassName(section)[0].scrollIntoView({ behavior: 'smooth' });
  const scrollToContentItem = id => document.getElementById(id).scrollIntoView({ behavior: 'smooth' });


  // Set sidebar styles depending on what section user has scrolled to
  const sectionScrollHandler = (section, inView) => {

    const _viewStates = { ...viewStates, [section]: inView };

    setViewStates(_viewStates);

    // Filter sections by order of when they appear
    const isActive = () => {
      if (_viewStates.showcase) return 'showcase';
      if (_viewStates.education) return 'education';
      if (_viewStates.experience) return 'experience';
      if (_viewStates.projects) return 'projects';
    }

    setViewSection(isActive());

    // Set section name if sidebar is collapsed
    if (profilebarState.collapsed) setProfilebarState({ ...profilebarState, title: isActive() });
  }

  // Expand content item
  const handleContentItemClick = _content => {
    console.log(_content.title);
    setProfilebarWidth(70);
    setProfilebarState({ collapsed: true, title: _content.title });
    setFocusedContentWidth("50%");
    setFocusedContent(_content);
    setFocusedState(true);

    // Wait for everything to finish re-sizing, then move it into view
    setTimeout(() => scrollToContentItem(_content.id), 800);
  }

  // Close expanded content item
  const handleContentItemClose = e => {

    e.stopPropagation();

    console.log('close');
    setProfilebarWidth(300);
    setProfilebarState({ collapsed: false, title: viewSection });
    setFocusedContent({});
    setFocusedContentWidth(0);
    setFocusedState(false);
  }

  return(
    <>
      <ViewPort className="share">
        <LeftResizable className="share-profilebar" size={profilebarWidth} maximumSize={350} minimumSize={60} trackSize={true}>
          <Info>{handleInfo}</Info>
          <ProfileBar
            user={{"firstName": share.firstName, "lastName": share.lastName}}
            profile={{ ...{ "logo": share.logo, "education": share.education, "experience": share.experience }, bio: "Yolo's TSLA calls full time" }}
            condensed={profilebarState.collapsed}
            condensedTitle={profilebarState.title}
            clickHandler={scrollToSection}
            section={viewSection}
          />
        </LeftResizable>
        <Fill className="share-main" scrollable={!inFocusedState}>
            <Section name="showcase" className="share-showcase" scrollHandler={sectionScrollHandler}>
                  <Col>
                    <Row>
                      <h1>Showcase</h1>
                    </Row>
                    <Row>
                        {gettingSharepage
                            ? <><h1><Skeleton/></h1><p><Skeleton count={1}/></p></>
                            : <></>//<><Showcase items={showcase}/></>
                        }
                    </Row>
                  </Col>
                </Section>
            <Section name="education" className="share-education" scrollHandler={sectionScrollHandler}>
              <Col>
                <Row>
                  <h1>Education</h1>
                </Row>
                <Row>
                  <Card>
                  {gettingSharepage
                    ? <><h1><Skeleton/></h1><p><Skeleton count={2}/></p></>
                    : share.education.map((educationItem, index) =>
                      <div key={index}>
                        <h3>{educationItem}</h3>
                        <p>Description of lessons learned.</p>
                        <p><strong>Awards and achievements</strong> Best</p>
                        <p><strong>Extracurricular</strong> Longjump</p>
                      </div>)
                  }
                  </Card>
                </Row>
              </Col>
            </Section>
            <Section name="experience" className="share-experience" scrollHandler={sectionScrollHandler}>
              <Col>
                <Row>
                  <h1>Experience</h1>
                </Row>
                <Row>
                  <Card>
                  {gettingSharepage
                    ? <><h1><Skeleton/></h1><p><Skeleton count={2}/></p></>
                    : share.experience.map((experienceItem, index) =>
                      <div key={index}>
                        <h3>{experienceItem}</h3>
                        <p>Description of experience.</p>
                        <p><strong>Responsibilities</strong> Smart</p>
                        <p><strong>Achievements</strong> Longjump</p>
                      </div>)
                  }
                  </Card>
                </Row>
              </Col>
            </Section>
            <Section name="projects" className="share-projects" scrollHandler={sectionScrollHandler}>
              <Col>
                <Row>
                  <h1>Projects</h1>
                </Row>
                {gettingSharepage
                  ? <><h1><Skeleton/></h1><p><Skeleton count={3}/></p></>
                  : share.content.map((contentItem, index) =>
                    <ShareContentItem
                      content={contentItem}
                      key={index}
                      clickHandler={handleContentItemClick}
                      closeHandler={handleContentItemClose}
                    />)
                }
              </Col>
            </Section>
        </Fill>
        <Right className="share-focusedcontent" size={focusedContentWidth} scrollable={true}>
          {focusedContent.title && <p>{focusedContent.content}</p>}
        </Right>
      </ViewPort>
    </>
  );
}
