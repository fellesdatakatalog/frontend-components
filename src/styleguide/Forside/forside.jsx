import React from 'react';
import Card from '../../components/Card';
import Grid from '../../components/Grid/Grid';
import Icon from '../../components/Icon';
import NavigationTile from '../../components/NavigationTile';
import NavigationContent from '../../components/NavigationTile/NavigationContent';

function Forside(props) {
  return (
    <div style={{ marginBottom: '60px', marginTop: '30px' }}>
      <Card margin="large" color={Card.Color.BEIGE}>
        <Grid>
          <Grid.Row>
            <Grid.Col lg={1} />
            <Grid.Col hiddenMdDown lg={1}>
              <Icon
                iconName="Forum"
                ariaLabel="Ikon med snakkebobler"
                style={{
                  color: '#1d1d1d',
                  fontSize: '40px',
                  marginTop: '10px'
                }}
              />
            </Grid.Col>
            <Grid.Col lg={8}>
              <p
                style={{
                  marginBottom: '10px',
                  fontStyle: 'italic',
                  color: '#1d1d1d',
                  fontWeight: '400',
                  fontSize: '18px'
                }}
              >
                Med Designsystemet slipper vi å tenke så mye på designreglene
                til Skatteetaten, og utviklingsjobben vår blir mye lettere.{' '}
              </p>
              <p
                style={{
                  marginBottom: '10px',
                  color: '#1d1d1d',
                  fontWeight: '400',
                  fontSize: '18px',
                  textAlign: 'right'
                }}
              >
                – utvikler i Skatteetaten
              </p>
            </Grid.Col>
            <Grid.Col lg={2} />
          </Grid.Row>
        </Grid>
      </Card>
      <NavigationTile>
        <NavigationContent
          icon={'hammer'}
          heading={'For utviklere'}
          to={'#section-kom-i-gang-for-utviklere'}
          key={'for-utviklere'}
        >
          Kom i gang med designsystemet i din løsning
        </NavigationContent>
        <NavigationContent
          icon={'bookOpen'}
          heading={'For utviklere'}
          to={'#section-kom-i-gang-for-designere'}
          key={'for-designere'}
        >
          Kom i gang med sketch-prototyper og design
        </NavigationContent>
      </NavigationTile>
    </div>
  );
}

export default Forside;
