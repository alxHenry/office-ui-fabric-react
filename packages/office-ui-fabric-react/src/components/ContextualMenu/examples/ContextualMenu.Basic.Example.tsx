import * as React from 'react';
import { ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import './ContextualMenuExample.scss';

export class ContextualMenuBasicExample extends React.Component {

  constructor(props: {}) {
    super(props);
    this.state = {
      showCallout: false
    };
  }

  public render() {
    return (
      <div>
        <DefaultButton
          id='ContextualMenuButton1'
          text='Click for ContextualMenu'
          menuProps={ {
            shouldFocusOnMount: true,
            items: [
              {
                key: 'newItem',
                name: 'New',
                onClick: () => console.log('New clicked')
              },
              {
                key: 'divider_1',
                itemType: ContextualMenuItemType.Divider
              },
              {
                key: 'rename',
                name: 'Rename',
                onClick: () => console.log('Rename clicked')
              },
              {
                key: 'edit',
                name: 'Edit',
                onClick: () => console.log('Edit clicked')
              },
              {
                key: 'properties',
                name: 'Properties',
                onClick: () => console.log('Properties clicked')
              },
              {
                key: 'disabled',
                name: 'Disabled item',
                disabled: true,
                onClick: () => console.error('Disabled item should not be clickable.')
              }
            ]
          } }
        />
      </div>
    );
  }
}
