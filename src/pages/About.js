import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            fontSize: "2rem",
            my: 2,
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
          },
          "& h4": {
            fontSize: "1.5rem",
            mb: 2,
          },
        }}
      >
        <Typography variant="h4">Welcome To My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
          nesciunt dolore aliquid dolores molestias qui voluptate quia pariatur
          fuga fugit similique totam ipsum perferendis asperiores aliquam, modi
          delectus facere harum temporibus itaque voluptatem. Molestiae, nobis
          amet. Facilis veniam, tempora voluptatum omnis dolorum sed praesentium
          neque quia dolor cumque nemo corporis, accusamus explicabo quam optio
          beatae amet provident delectus perspiciatis facere. Veniam dolorem
          obcaecati, omnis minus molestiae commodi in alias ipsa laboriosam a
          temporibus distinctio vero incidunt accusamus corporis necessitatibus
          consequatur quos, sequi quod cum adipisci? Tempore quam ducimus
          laborum, dolore ipsam enim illum quasi? Adipisci fuga eligendi neque
          porro ipsa.
        </p>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
          mollitia et velit incidunt, iure repellendus asperiores eum tempore
          minus culpa molestiae earum ab veritatis. Voluptates magnam aliquid
          vero quas nostrum accusamus sed ratione reiciendis iusto officiis
          veritatis unde voluptate atque consequuntur amet eum reprehenderit
          autem cupiditate recusandae vel nihil, animi mollitia. Temporibus quis
          rem tenetur, ut nam quae a accusantium officia culpa alias itaque
          deserunt sunt libero earum! Voluptate, at debitis? Natus eum atque
          tenetur nemo perferendis, unde quia aliquid blanditiis, dignissimos
          explicabo suscipit nihil nostrum. Perspiciatis accusantium dolore
          labore ducimus alias facilis necessitatibus eius error. Quas labore
          est necessitatibus.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
