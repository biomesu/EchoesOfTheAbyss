import React from "react";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Latest News</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'black', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  black' }}
            date="September 2024"
            iconStyle={{ background: '#000001', color: 'rgb(39, 40, 34)' }}
          
          >
            <h3 className="vertical-timeline-element-title">Update 0.4</h3>
            <p>
              New UI/UX designs for the Interface and Main Menu
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2024"
            iconStyle={{ background: '#000001', color: 'rgb(39, 40, 34)' }}
          
          >
            <h3 className="vertical-timeline-element-title">Update 0.3</h3>
            <p>
              New Gun Designs
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2024"
            iconStyle={{ background: '#000001', color: 'rgb(39, 40, 34)' }}
         
          >
            <h3 className="vertical-timeline-element-title">Update 0.2</h3>
            <p>
              New Character Designs
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2024"
            iconStyle={{ background: '#000001', color: 'rgb(39, 40, 34)' }}
          
          >
            <h3 className="vertical-timeline-element-title">Update 0.1</h3>
            <p>
              Implemented 1st Boss with mechanics!
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;