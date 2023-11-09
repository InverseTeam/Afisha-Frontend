'use client';

import { NavBar } from '@/widgets/navBar';
import { useState, useRef, useEffect } from 'react';
import { Gapped } from '@/shared/gapped';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { PieChart } from '@/widgets/analyticsData/pieChart';
import { ListPaticipants } from '@/widgets/analyticsData/listParticipants';
import { Title } from '@/shared/title';
import { SecondTitle } from '@/shared/secondTitle';
import { BarChart } from '@/widgets/analyticsData/barChart';
import { Feedback } from '@/widgets/feedback/ui/ui';
import { TargetAdd } from '@/widgets/targetAdd/ui/ui';



export default function AnalyticsEvent() {
    const [mobile, setMobile] = useState<boolean>(false);
    const width = useRef<number>(0);

    const metadata: Metadata = {
        title: 'Мероприятие',
        description:
            'Расписания всех мероприятий Екатеринбурга на 2023 год и удобная покупка билетов',
        icons: {
            icon: ['./favicon.ico'],
        },
    };

    useEffect(() => {
        width.current = window && window.innerWidth;
        if (width.current < 900) {
            setMobile(true);
        }
    }, []);

    // TODO: make new features
    return (
        <>
        analytics
            <Gapped vertical gap="32px">
                {/* <NavBar mobile={mobile} /> */}
               
                    {/* <section className="w-1/2">
                        <div className="flex flex-col mb-4">
                            <Title>Концерт джаза</Title>
                            <SecondTitle>МТС Live Холл</SecondTitle>
                        </div>

                        <PieChart />
                        <BarChart />
                        <Feedback />
                    </section>

                    <section className="w-1/2 flex flex-col items-center">
                        <ListPaticipants />
                        <TargetAdd />
                    </section> */}
                
            </Gapped>
        </>
    );
}
