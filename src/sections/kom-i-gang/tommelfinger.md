For å evaluere brukeropplevelsen til en løsning er det brukervennlighetstesting vi normalt støtter oss til. Men av og til kan det også være nyttig å evaluere på andre måter; for eksempel å sjekke opp mot solide grunnprinsipper for god design.

Listen under inneholder ti generelle grunnprinsipper for design av brukergrensesnitt, som har vist seg å holde vann. Det finnes unntak, men de er sjeldne, så dersom du har en løsning som bryter med noen av disse, anbefaler vi å brukerteste ekstra grundig.

```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import Spinner from '@skatteetaten/frontend-components/Spinner';
import Button from '@skatteetaten/frontend-components/Button';
import Card from '@skatteetaten/frontend-components/Card';
import TopBanner from '@skatteetaten/frontend-components/TopBanner';
import TextField from '@skatteetaten/frontend-components/TextField';
import Grid from '@skatteetaten/frontend-components/Grid';
import MessageBar from '@skatteetaten/frontend-components/MessageBar';
import LabelWithCallout from '@skatteetaten/frontend-components/LabelWithCallout';
import ActionButton from '@skatteetaten/frontend-components/ActionButton';
import IconButton from '@skatteetaten/frontend-components/IconButton';
import Link from '@skatteetaten/frontend-components/Link';

const initialState = {
  hasSpinner: false
};

const links = [
  {
    text: 'Beregn reisefradrag',
    path: '#stepList'
  },
  {
    text: 'Oversikt over alle fradrag',
    path: '#stepList'
  }
];

const titles = {
  step1: {
    no: 'Jobber du?',
    en: 'Are you a wage earner doing paid work?'
  },
  step2: {
    no: 'Sommerjobb?',
    en: 'Summerjob?'
  },
  step3: {
    no: 'Du er ikke pendler',
    en: 'You are not a commuter.'
  }
};

<Accordion processList>
  <AccordionItem
    toggleContent
    toggleButtonText={'Synlig systemstatus'}
    stepId={'step-1'}
  >
    <p style={{ fontWeight: 'bold' }}>
      Systemet bør, innen rimelig tid og på en hensiktmessig måte, alltid holde
      brukerne informert om hva som skjer.
    </p>
    <p>
      Dersom forsinkelsen er ca. 0,1 sekund vil brukeren oppleve systemet som
      umiddelbart. Alt over 1 sekund vil oppfattes som at man venter på
      systemet, og tar det over 10 sekunder vil brukerne ofte finne på noe annet
      å gjøre mens de venter.
    </p>
    <p>
      Dersom innlasting tar mindre enn 10 sekunder kan vi vise en spinner mens
      siden lastes:
    </p>
    <Card
      margin="xLarge"
      color={Card.Color.WHITE}
      border={Card.Border.GREEN_BORDER}
    >
      <br />
      <br />
      <Spinner />
      <p style={{ textAlign: 'center' }}>
        Vennligst vent mens vi henter opplysningene dine...
      </p>
      <br />
    </Card>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Samsvar mellom systemet og virkeligheten'}
    stepId={'step-2'}
  >
    <p style={{ fontWeight: 'bold' }}>
      Systemet bør bruke samme ord, uttrykk og konsepter som brukerne kjenner,
      fremfor systemorienterte begrep. Følg konvensjonsjoner fra virkelighetens
      verden, og la informasjonen vises på en naturlig måte og i logisk
      rekkefølge.
    </p>
    <div className="dodont">
      <div className="do">
        <p>Gjør slik:</p>
        <Grid padding="0px">
          <Grid.Row rowSpacing={Grid.SPACE_NONE}>
            <Grid.Col noSpacing lg={12}>
              <LabelWithCallout label={'Mine saker'} />
              <br />
              <LabelWithCallout label={'Innsendte skjema'} />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>
      <div className="dont">
        <p>Ikke gjør slik:</p>
        <Grid padding="0px">
          <Grid.Row rowSpacing={Grid.SPACE_NONE}>
            <Grid.Col noSpacing lg={12}>
              <LabelWithCallout label={'Myndighetsfastsettinger'} />
              <br />
              <LabelWithCallout label={'Saksmappe'} />
              <br />
              <LabelWithCallout label={'Prosesser'} />
              <br />
              <LabelWithCallout label={'Mottaksmeldinger'} />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Kontroll og frihet'}
    stepId={'step-3'}
  >
    <p style={{ fontWeight: 'bold' }}>
      Brukere velger ofte funksjoner ved en feiltakelse, og trenger ofte en
      tydelig «nødutgang» for å komme seg ut av den uønskede sitausjonen.{' '}
    </p>
    <p>
      I stegveiviseren har vi endre-knapper dersom brukeren vil gå tilbake og
      endre noe, selv etter han har sendt inn.
    </p>
    <p>I toppbanner har vi en lenke dersom brukeren vi gå tilbake til start:</p>
    <TopBanner
      external
      homeText="Til skatteetaten.no"
      title="Ekstern publikumsløsning"
      logoLink
    />
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Konsistens og standarder'}
    stepId={'step-4'}
  >
    <p style={{ fontWeight: 'bold' }}>
      Brukere bruker mer tid på andre sider enn i din løsning. Det betyr at
      brukerne har mest erfaring med hvordan ting virker fra andre sider enn
      dine. Derfor er det lurt å følge allerede kjente konvensjoner.
    </p>
    <p>
      Hvis du for eksempel lager en løsning for betaling på nett, kan du med
      fordel legge deg så tett opp til hvordan det er vanlig å betale i
      nettbutikker.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Unngå feil'}
    stepId={'step-5'}
  >
    <p style={{ fontWeight: 'bold' }}>
      Selv om gode feilmeldinger er fint, er det enda bedre å unngå at feilene
      oppstår i det hele tatt. Prøv å fjerne muligheten for å gjøre feil eller
      kontroller for vanlige feil underveis og spør om bekreftelse hvis de går
      videre.
    </p>
    <p>
      Her er det kun mulig å skrive inn siffer i feltet for organisasjonsnummer:
    </p>
    <div style={{ width: '150px' }}>
      <TextField
        id={'my-input-1'}
        value={'987654321'}
        onChange={(e, value) => setState({ value })}
        label={'Organisasjonnummer'}
        mask={'999 999 999'}
        maskChar={''}
      />
    </div>
    <p>Vi kan vise et varsel når en verdi virker høy:</p>
    <div style={{ width: '150px', marginBottom: '8px' }}>
      <TextField
        id={'my-helpfield-2'}
        label="Antall barn"
        inputMode={'numeric'}
        value={'23'}
        warning="Er du sikker på at antall barn er riktig?"
        value={'23'}
        onChange={(e, value) => setState({ value2: value })}
      />
    </div>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Se eller oppdage i stedet for å huske'}
    stepId={'step-6'}
  >
    <p style={{ fontWeight: 'bold' }}>
      Gjør ting synlig på skjermen for å avlaste brukers hukommelse.
    </p>
    <p>
      Det bør ikke være nødvendig å huske informasjon fra et vindu eller dialog
      til et annet, eller hva et ikon betyr.
    </p>
    <div className="dodont">
      <div className="do">
        <p>Gjør slik:</p>
        <Grid padding="0px">
          <Grid.Row rowSpacing={Grid.SPACE_NONE}>
            <Grid.Col noSpacing lg={12}>
              <ActionButton
                ariaLabel={'Legg til skatteplikt'}
                icon="AddOutline"
              >
                Legg til skatteplikt
              </ActionButton>
              <ActionButton ariaLabel={'Legg til skatteplikt'} icon="Upload">
                Last opp fil
              </ActionButton>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row rowSpacing={Grid.SPACE_NONE}>
            <Grid.Col noSpacing lg={12}>
              <p>Vise funksjoner:</p>{' '}
              <IconButton title={'Skriv ut'} icon="Print" />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>
      <div className="dont">
        <p>Ikke gjør slik:</p>
        <Grid padding="0px">
          <Grid.Row rowSpacing={Grid.SPACE_NONE}>
            <Grid.Col noSpacing lg={12}>
              <IconButton
                title="Legg til skatteplikt"
                buttonSize="large"
                icon="AddOutline"
              />
              <IconButton
                title="Last opp fil"
                buttonSize="large"
                icon="Upload"
              />
            </Grid.Col>
            <Grid.Row rowSpacing={Grid.SPACE_NONE}>
              <Grid.Col noSpacing lg={12}>
                <p>Skjule funksjoner:</p>{' '}
                <p style={{ fontWeight: 'normal' }}>
                  (må huske høyreklikke + skriv ut)
                </p>
              </Grid.Col>
            </Grid.Row>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Fleksibilitet og effektivitet'}
    stepId={'step-7'}
  >
    <p style={{ fontWeight: 'bold' }}>
      Et system bør gi god støtte til både uerfarne og erfarne brukere. Erfarne
      brukere vil sette pris på «akseleratorer» - funksjoner som reduserer tiden
      det tar å gjøre en handling eller gjennomføre en prosess. Slike
      akseleratorer blir ofte ikke lagt merke til av uerfarne brukere, men gjør
      at erfarne brukere ikke mister fart.
    </p>
    <p>
      Et eksempel på slike akseleratorer er ved kopiering av tekst i en e-post.
      Hvis du skal kopiere teksten kan du:
    </p>
    <ol>
      <li>Trykke på kopier-ikonet</li>
      <li>Markere og deretter høyreklikke på teksten og velge kopiere</li>
      <li>Bruke tastatursnarveien Ctrl + C.</li>
    </ol>
    <p>Brukere kan velge den måten som passer dem best.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Estetisk og minimalistisk design'}
    stepId={'step-8'}
  >
    <p style={{ fontWeight: 'bold' }}>
      I grafiske brukergrensesnitt er det informasjon som er relevant og
      ikke-relevant for brukeren. Et enkelt og minimalistisk brukergrensesnitt
      fremhever det som er viktigst for brukeren og fjerner «støy».
    </p>
    <p>
      Alt som vises på skjermen, enten det er relevant eller ikke, blir
      prosesert av brukeren. Dersom det er mye å prosessere i bildet blir
      informasjonen han leter etter eller oppgaven han forsøke å gjøre mindre
      tydelig. Det er derfor viktig å prioritere informasjonen som vises. Dersom
      du informasjonen som ikke er så ofte brukt eller ikke bidrar til de
      overordnede målene - vurder å fjerne den.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Oppdage, forstå og komme seg etter feil'}
    stepId={'step-9'}
  >
    <p style={{ fontWeight: 'bold' }}>
      Feilmeldinger bør skrives med naturlig språk, beskrive problemet og
      foreslå en løsning.
    </p>
    <div className="dodont">
      <div className="do">
        <p>Gjør slik:</p>
        <MessageBar type={MessageBar.Type.warning}>
          Kunne ikke hente kjøretøydata. Sjekk at du har riktige tilganger i
          <Link
            path={'#link'}
            text={'kjøretøyarkivet'}
            icon={'OpenInNew'}
            placement="after"
          />.
        </MessageBar>
      </div>
      <div className="dont">
        <p>Ikke gjør slik:</p>
        <MessageBar type={MessageBar.Type.warning}>
          Feil: 401 Unauthorized error.
        </MessageBar>
      </div>
    </div>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Hjelp og dokumentasjon'}
    stepId={'step-10'}
  >
    <p style={{ fontWeight: 'bold' }}>
      Selv om det er best om et system kan brukes uten dokumentasjon - av og til
      er det nødvendig å tilby hjelp og dokumentasjon. Slik informasjon bør være
      enkel å søke i, være fokusert på brukerens oppgaver, liste opp steg som
      brukeren må følge og ikke være for omfattende.
    </p>
    <p>
      Slik dokumenterer skatteetaten.no hvordan man kan levere forlovererklæring
      på papir:
    </p>
    <Card color={Card.Color.GREEN}>
      Skjemaet må signeres og sendes inn sammen med brudefolkets søknad. Vi kan
      ikke behandle forlovererklæringer som sendes inn alene, fordi den ikke er
      gyldig uten brudefolkets egenerklæring. Søknaden om prøving av ekteskap
      skal alltid sendes inn samlet og komplett.
    </Card>
    <p>Hvis du skal levere forlovererklæring på papir, må du gjøre dette:</p>
    <ol>
      <li>
        Last ned og fyll ut skjemaet{' '}
        <Link
          path={'#link'}
          text={'Forlovererklæring'}
          icon={'OpenInNew'}
          placement="after"
        />
      </li>
      <li>
        Send eller lever skjemaet utfylt og undertegnet sammen med de andre
        nødvendige papirene til{' '}
        <Link
          path={'#link'}
          text={'skattekontoret ditt'}
          icon={'OpenInNew'}
          placement="after"
        />
      </li>
    </ol>
    <p>
      Papirskjemaet ligger hos{' '}
      <Link
        path={'#link'}
        text={'Statlig blankettarkiv'}
        icon={'OpenInNew'}
        placement="after"
      />
    </p>
  </AccordionItem>
</Accordion>;
```

Tommelfingerreglene på denne siden er kraftig inspirert av Norman Nielsens ti designprinsipper (https://www.nngroup.com/articles/ten-usability-heuristics/).
