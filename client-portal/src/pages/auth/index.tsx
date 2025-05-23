import { useState } from 'react';
import { Card, CardBody, Tabs, Tab } from '@nextui-org/react';
import { Login } from '../../features/user/login'
import { Register } from '../../features/user/register';

export const Auth = () => {
  const [selected, setSelected] = useState('login');

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col">
        <Card className="max-w-full w-[340px] h-[450px]">
          <CardBody className="overwlow-hidden">
            <Tabs fullWidth
              size="md"
              selectedKey={ selected }
              onSelectionChange={(key) => setSelected(key as string)}
            >
              <Tab key="login" title="Enter">
                <Login setSelected={setSelected} />
              </Tab>

              <Tab key="sign-up" title="sigh-up">
                <Register setSelected={setSelected} />
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}