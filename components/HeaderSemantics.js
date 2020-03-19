import React from 'react';
import {Header,Grid,Menu,Button} from 'semantic-ui-react';
  
const HeaderSemantics = () => (
    <div>
        <button>other button</button>
        <Grid columns={3} doubling>
            <Grid.Column>
            <Menu
                items={[
                { key: '1', name: 'link-1', content: 'Link' },
                { key: '2', name: 'link-2', content: 'Link' },
                { key: '3', name: 'link-3', content: 'Link' },
                ]}
                pointing
                secondary
            />
            </Grid.Column>
        </Grid>
    </div>
)

export default HeaderSemantics