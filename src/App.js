import React from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';

const defaultProps = {
    contentHeight    : 'auto',
    resourceAreaWidth: 220,
    now              : Date.now(),
    slotDuration     : '00:01:00',
    duration         : { days: 1 }
};

const Timeline = (props) => {
    return (
        <FullCalendar
            duration={props.duration}
            events={[]}
            initialView="resourceTimeline"
            now={props.now}
            plugins={[resourceTimelinePlugin, interactionPlugin]}
            resourceAreaWidth={props.resourceAreaWidth}
            resources={Array(20)
                .fill({})
                .map((item, idx) => ({
                    ...item,
                    id        : idx + 1,
                    title     : `${idx + 1}`,
                    isDisabled: idx % 4 === 0
                }))}
            schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
        />
    );
};

Timeline.defaultProps = defaultProps;

export default Timeline