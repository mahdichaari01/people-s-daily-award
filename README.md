# People's Daily Award #PDA

Welcome to The People's Daily Award, a full-stack web application created as the end-of-year project for the web API lab at INSAT. Our mission is to provide people with a platform to express their gratitude, love, and recognition for those who have performed a good deed and deserve to be encouraged.

The concept is simple yet powerful - anyone can nominate an individual who has done something good, and people can vote for their favorite act of kindness. Each day, we send an email certification to the nominated person to acknowledge their efforts and inspire them to continue doing good.

The philosophy behind our project is rooted in the belief that gratitude is a powerful motivator that can encourage people to act ethically and make positive changes in their lives. Our aim is to create a community that values and celebrates good deeds, and through this social experiment, we hope to inspire more acts of kindness and compassion.

In addition to promoting social responsibility, our application leverages the latest web API technology to provide a seamless user experience. Our email certification feature ensures that nominated individuals receive immediate feedback and recognition, while the nomination and voting system provides a fair and transparent process for acknowledging good deeds.

Thank you for joining us on this journey to promote positivity and kindness in our community. Together, we can make a difference and create a better world for everyone.

## Authors

- [@mahdichaari01](https://github.com/mahdichaari01)
- [@Nizar-Charrada](https://github.com/Nizar-Charrada)
- [@ines-besrour](https://github.com/ines-besrour)
- [@Imenkaabachi](https://github.com/Imenkaabachi)

## Contributing

This project is strucutured as a monorepo. It leverages pnpm workspaces to acheive that.

The project strucuture

.\
├── frontend/\
├── backend/\
└── packages/\
&emsp;&emsp;└── types

- to install a package in a particular workspace: `pnpm add -F <workspace_name:e.g frontend> <package_name>`
- to install a package globally for all workspaces : `pnpm add <package_name> -workspace`
- to remove, build, etc you just follow the pattern `pnpm [cmd] -F <workspace_name> [cmd params]`
- when branching or commiting please prefix the commit message or branch name with `frontend-`, `backend-` or `types-` for clariry
- Please try follow the commit naming conventions described [here](https://www.conventionalcommits.org/en/v1.0.0/)
- This project uses husky and prettier to prettify the code, this ensures that we follow the same styling format
