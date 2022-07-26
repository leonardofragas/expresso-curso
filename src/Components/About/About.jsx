import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import profileImage from './../../images/about-image.png'

import './About.styl'

function About(props) {
  return (
    <Container maxWidth="md" className="About">
      <Grid container>
        <Grid container item spacing={6} xs={12} md={4}>
          <Grid item md={12}>
            <Typography variant="h4" element="h4">
              10 anos
            </Typography>

            <Typography paragraph={true}>
              Casado com a Letícia e pai do Tomás, Leonardo Fragas possui mais de 10 anos de experiência em vendas, marketing e publicidade.
            </Typography>
          </Grid>

          <Grid item md={12}>
            <Typography variant="h4" element="h4">
              +1.000
            </Typography>

            <Typography paragraph={true}>
              Já conta com mais de mil alunos em seus cursos; entre eles alguns dos grandes players do mercado digital.
            </Typography>
          </Grid>

          <Grid item md={12}>
            <Typography variant="h4" element="h4">
              300K
            </Typography>

            <Typography paragraph={true}>
              Já faturou mais de R$ 300.000,00 até o momento, apenas em projetos 100% autorais e tendo menos de 1000 seguidores no Instagram.
            </Typography>
          </Grid>
        </Grid>

        <Grid container item md={2} xs={0}></Grid>

        <Grid display="flex" alignContent="center" alignItems="center" justifyContent="center" container item xs={12} md={6}>
          <img height="500px" sx={{ marginLeft: 'auto' }} src={profileImage} alt="" />
        </Grid>
      </Grid>
    </Container>
  )
}

export default About 