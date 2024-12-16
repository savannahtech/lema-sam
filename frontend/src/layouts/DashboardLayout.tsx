import { FC, PropsWithChildren } from 'react';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='min-h-screen flex-col my-24 w-[85%] md:w-[60%] items-center text-left mx-auto justify-center'>
      {children}
    </div>
  );
};

export default DashboardLayout;
