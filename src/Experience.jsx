import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent, { timelineContentClasses } from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

export default function Experience({ role, des, title }) {
    return (
        <>
            <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                    <span>{role}</span>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent >
                    <span><b>{title}</b></span><br />
                    <span> {des}</span>

                </TimelineContent>
            </TimelineItem>


        </>
    );
}
