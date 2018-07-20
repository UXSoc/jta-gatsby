import React from 'react';
import SiteNavigator from '../components/SiteNavigator/SiteNavigator';
import StepZilla from 'react-stepzilla';
import StepWrapper from '../components/StepWrapper';

const PAGES = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'How To Apply',
    link: '/how-to-apply',
  },
  {
    title: 'Step by Step JTA Application Procedure',
    link: '/application-procedure',
  },
];
const steps = [
  {
    name: 'Step 1',
    component: <StepWrapper title="Step 1" description="Step 1 Description" />,
  },
  {
    name: 'Step 2',
    component: <StepWrapper title="Step 2" description="Step 2 Description" />,
  },
  {
    name: 'Step 3',
    component: <StepWrapper title="Step 3" description="Step 3 Description" />,
  },
  {
    name: 'Step 4',
    component: <StepWrapper title="Step 4" description="Step 4 Description" />,
  },
  {
    name: 'Step 5',
    component: <StepWrapper title="Step 5" description="Step 5 Description" />,
  },
  {
    name: 'Step 6',
    component: <StepWrapper title="Step 6" description="Step 6 Description" />,
  },
  {
    name: 'Step 7',
    component: <StepWrapper title="Step 7" description="Step 7 Description" />,
  },
  {
    name: 'Step 8',
    component: <StepWrapper title="Step 8" description="Step 8 Description" />,
  },
  {
    name: 'Step 9',
    component: <StepWrapper title="Step 9" description="Step 9 Description" />,
  },
  {
    name: 'Step 10',
    component: (
      <StepWrapper title="Step 10" description="Step 10 Description" />
    ),
  },
  {
    name: 'Step 11',
    component: (
      <StepWrapper title="Step 11" description="Step 11 Description" />
    ),
  },
];
const nextButtonCls = 'button is-primary is-pulled-right';
const backButtonCls = 'button is-primary is-pulled-left';
const ApplicationProcedure = () => (
  <div>
    <SiteNavigator
      title="Step by Step JTA Application Procedure"
      pages={PAGES}
    />
    <section className="section">
      <div className="container">
        <div className="step-progress">
          <StepZilla
            steps={steps}
            showSteps="true"
            nextButtonCls={nextButtonCls}
            backButtonCls={backButtonCls}
          />
        </div>
      </div>
    </section>
  </div>
);

export default ApplicationProcedure;
