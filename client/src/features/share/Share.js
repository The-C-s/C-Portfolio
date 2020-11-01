import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ViewPort, LeftResizable, Fill, Right, Info } from 'react-spaces';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Interweave from 'interweave';

import ProfileBar from './ProfileBar';
import ShareContentItem from './ShareContentItem'; // Component probably needs to be edited to suit share view
import Section from './Section';
import Skeleton from 'react-loading-skeleton';
import Button from 'react-bootstrap/Button';
import DeleteShare from '../share/DeleteShare';

import { getContentType, getShareId } from '../../common/helpers';

import { getSharepage, editSharepage } from '../share/shareSlice';

/**
 * Main Share page.
 * 
 * Current issues:
 *  - Accesses state.user for avatar and background, need to be accessible by public url.
 */
export default function Share() {

  const dispatch = useDispatch();

  const shareid = getShareId(window.location.href);
  const gettingSharepage = useSelector(state => state.app.loading.getSharepage);
  const gettingContent = useSelector(state => state.app.loading.getContent);
  const user = useSelector(state => state.user);
  const share = useSelector(state => state.share);

  //this will be empty if user isn't logged in
  const allContent = useSelector((state) => state.content);

  // Reloading content
  useEffect(() => {
    async function fetch() {
      dispatch(getSharepage(shareid));
    }
    fetch();
  }, [dispatch, shareid]);

  //the selected posts
  const [selectedPosts, setSelectedPosts] = useState({});

  const [editing, setEditing] = useState(false);
  const saveEdit = () => {
    setEditing(false);
    var newContent = [];
    for (var post of allContent) {
      if (selectedPosts[post.id]) {
        newContent.push(post.id);
      }
    }
    //send new content
    dispatch(editSharepage({ id: shareid, content: newContent })).then(() =>
      dispatch(getSharepage(shareid))
    );
  };
  const cancelEdit = () => {
    setEditing(false);
  };
  const startEdit = () => {
    setEditing(true);

    var _selectedPosts = {};
    //add all the posts with initial value false
    var contentPost;
    for (contentPost of allContent) {
      _selectedPosts[contentPost.id] = false;
    }


    //change the values of the posts in the share view to true
    var sharedPost;
    for (sharedPost of share.content) {
      _selectedPosts[sharedPost.id] = true;
    }

    setSelectedPosts(_selectedPosts);
  };

  const [showDelete, setShowDelete] = useState(false);
  const clickDelete = () => {
      console.log(shareid);
      setShowDelete(true);
  }
  const handleDeleteClose = () => setShowDelete(false);


  const togglePost = (id) => {
    var _selectedPosts = { ...selectedPosts, [id]: !selectedPosts[id] };
    setSelectedPosts(_selectedPosts);
  };

  /**
   * Following code is for handling UI manipulation and animations.
   */

  const [profilebarWidth, setProfilebarWidth] = useState(300);
  const [focusedContent, setFocusedContent] = useState({});
  const [focusedContentWidth, setFocusedContentWidth] = useState(0);
  const [inFocusedState, setFocusedState] = useState(false);
  const [viewSection, setViewSection] = useState("showcase");
  const [profilebarState, setProfilebarState] = useState({
    collapsed: false,
    title: "showcase",
  });
  const [viewStates, setViewStates] = useState({
    showcase: true,
    education: false,
    experience: false,
    projects: false,
  });

  // Handler for changing sidebar type when its width is adjusted
  const handleInfo = (info) => {
    if (info.width <= 150 && !profilebarState.collapsed)
      setProfilebarState({ ...profilebarState, collapsed: true });
    else if (info.width > 150 && profilebarState.collapsed)
      setProfilebarState({ ...profilebarState, collapsed: false });

    // Fix scroll position if focused on a content item
    if (inFocusedState) scrollToContentItem(focusedContent.id);
  };

  // Handler for scrolling to a section by clicking in the sidebar
  const scrollToSection = section =>
    document
      .getElementsByClassName(section)[0]
      .scrollIntoView({ behavior: "smooth" });
      
  const scrollToContentItem = id =>
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth" });

  // Set sidebar styles depending on what section user has scrolled to
  const sectionScrollHandler = (section, inView) => {

    const _viewStates = { ...viewStates, [section]: inView };

    setViewStates(_viewStates);

    // Filter sections by order of when they appear
    const isActive = () => {
      if (_viewStates.showcase) return "showcase";
      if (_viewStates.education) return "education";
      if (_viewStates.experience) return "experience";
      if (_viewStates.projects) return "projects";
    };

    setViewSection(isActive());

    // Set section name if sidebar is collapsed
    if (profilebarState.collapsed)
      setProfilebarState({ ...profilebarState, title: isActive() });
  };

  // Expand content item
  const handleContentItemClick = (_content) => {
    console.log(_content.title);
    setProfilebarWidth(70);
    setProfilebarState({ collapsed: true, title: _content.title });
    setFocusedContentWidth("50%");
    setFocusedContent(_content);
    setFocusedState(true);

    // Wait for everything to finish re-sizing, then move it into view
    setTimeout(() => scrollToContentItem(_content.id), 800);
  };

  // Close expanded content item
  const handleContentItemClose = (e) => {
    e.stopPropagation();

    console.log("close");
    setProfilebarWidth(300);
    setProfilebarState({ collapsed: false, title: viewSection });
    setFocusedContent({});
    setFocusedContentWidth(0);
    setFocusedState(false);
  };
  /**
   * End of fancy UI code
   */

  return (
    <>
      <ViewPort className="share">
        <LeftResizable
          className="share-profilebar"
          size={profilebarWidth}
          maximumSize={350}
          minimumSize={60}
          trackSize={true}
        >
          <Info>{handleInfo}</Info>
          <ProfileBar
            user={{ firstName: share.firstName, lastName: share.lastName }}
            profile={{
              logo: share.logo,
              education: share.education,
              experience: share.experience,
              resume: share.resume,
              email: share.email,
            }}
            condensed={profilebarState.collapsed}
            condensedTitle={profilebarState.title}
            clickHandler={scrollToSection}
            section={viewSection}
          />
        </LeftResizable>
        <Fill className="share-main" scrollable={!inFocusedState}>
          <DeleteShare share={{"id": shareid}} show={showDelete} closeHandler={handleDeleteClose}/>
          <Section name="top" className="section-top" scrollHandler={sectionScrollHandler}/>
          <Section
            name="showcase"
            className={`share-showcase ${inFocusedState ? 'hidden' : ''}`}
            scrollHandler={sectionScrollHandler}
          >
            <Col>
              <Row>
                <div className="showcase-box">
                  <Image
                    roundedCircle
                    className={`showcase-avatar ${!viewStates.top ? 'showcase-avatar-condensed' : ''}`}
                    src={user.avatar}
                  />
                  <Image
                    className={`showcase-background ${!viewStates.top ? 'showcase-background-condensed' : ''}`}
                    src={user.background}
                  />
                </div>
              </Row>
              {gettingSharepage &&
                <>
                  <h1>
                    <Skeleton/>
                  </h1>
                  <p>
                    <Skeleton count={1}/>
                  </p>
                </>
              }
            </Col>
          </Section>
          <Section
            name="projects"
            className="share-projects"
            scrollHandler={sectionScrollHandler}
          >
            <Row className="heading">
              <div className="pageheading-rectangle1">
                <h1 className="pageheading-heading">Projects</h1>
                <div className="pageheading-decoration1" />
                <div className="pageheading-decoration2" />
              </div>
            </Row>
            <Row>
              <Col>
                {editing ? (
                  gettingContent ? (
                    <>
                      <h2>
                        <Skeleton />
                      </h2>
                      <p>
                        <Skeleton count={3} />
                      </p>
                    </>
                  ) : (
                    allContent.map((contentItem, index) => (
                      <ShareContentItem
                        content={contentItem}
                        key={index}
                        clickHandler={handleContentItemClick}
                        closeHandler={handleContentItemClose}
                        editing={true}
                        selected={selectedPosts[contentItem.id]}
                        toggleSelection={togglePost}
                      />
                    ))
                  )
                ) : gettingSharepage ? (
                  <>
                    <h2>
                      <Skeleton />
                    </h2>
                    <p>
                      <Skeleton count={3} />
                    </p>
                  </>
                ) : (
                  share.content.map((contentItem, index) => (
                    <ShareContentItem
                      content={contentItem}
                      key={index}
                      editing={false}
                      clickHandler={handleContentItemClick}
                      closeHandler={handleContentItemClose}
                    />
                  ))
                )}
              </Col>
            </Row>
            </Section>
            {user.isAuthenticated && (
                editing
                    ? <>
                        <Button onClick={saveEdit} variant="primary"> Save </Button>
                        <Button onClick={cancelEdit} variant="danger"> Cancel </Button>
                      </>
                    : <>
                        <Button onClick={startEdit} variant="primary"> Edit </Button>
                        <Button onClick={clickDelete} variant="danger"> Delete </Button>
                      </>
            )}
        </Fill>
        <Right
          className="share-focusedcontent"
          size={focusedContentWidth}
          scrollable={true}
        >
          {focusedContent.title && (
            <p>
              <hr />
              <strong>{focusedContent.title}</strong>
              <hr />
              {focusedContent.description}
              <hr />
              {getContentType(focusedContent.content) === 'image' && <Image src={focusedContent.content} fluid/>}
              {getContentType(focusedContent.content) === 'text' && <Interweave content={focusedContent.content}/>}
            </p>
          )}
        </Right>
      </ViewPort>
    </>
  );
}
