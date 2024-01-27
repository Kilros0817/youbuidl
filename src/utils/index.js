import axios from "axios";
import { subgraphURLs } from "./constant";

const getDataFromSubgraph = async (query, subgraphURL) => {
    try {
        const result = await axios.post(subgraphURL, {
            query,
        });

        console.log(result, "=========result=======")
        return { isSuccess: true, data: result.data.data };
    } catch (error) {
        return { isSuccess: false, data: "" };
    }
};

export const getProjects = async () => {
    const query = `{
        projects(orderBy: blockTime) {
          id
          creator
          projectDeadline
          currentAmount
          currentState
          desc
          filterTags
          goalAmount
          noOfContributors
          projectCoverUrl
          socialUrl
          title
          websiteUrl
          qfRoundID
        }
        qfrounds(first: 1, orderBy: blockTime, orderDirection: desc) {
          id
          amount
        }
      }`;
    try {
        let projects = []
        await Promise.all(
            Object.entries(subgraphURLs).map(async ([key, value]) => {
                const res = await getDataFromSubgraph(query, value);
                console.log(res, "==========res==========")
                if (res.isSuccess) {
                    let index = 0;
                    let projectsList = res.data.projects;
                    const qfRounds = res.data.qfrounds;
                    const qfRound = qfRounds.length > 0 ? qfRounds[0] : null;

                    projectsList = projectsList.map((project) => {
                        if (qfRound && qfRound.id == project.qfRoundID) {
                            return { ...project, chainId: key, index: index++, isOnQF: true, matchingPool: qfRound.amount }
                        }

                        return { ...project, chainId: key, index: index++, isOnQF: false, matchingPool: 0 }
                    }
                    )
                    projects = projects.concat(projectsList);
                }
            })
        )

        return projects
    } catch (e) {
        console.log(e, "=========error in get projects============")
        return [];
    }
};

export const getProject = async (projectContractAddress, chainId) => {
    const query = `{
        project(id: "${projectContractAddress}") {
          id
          desc
          currentState
          currentAmount
          creator
          filterTags
          goalAmount
          noOfContributors
          projectCoverUrl
          projectDeadline
          qfRoundID
          socialUrl
          githubUrl
          title
          websiteUrl
        }
        qfrounds(first: 1, orderBy: blockTime, orderDirection: desc) {
          id
          amount
        }
      }`;

    try {
        const res = await getDataFromSubgraph(query, subgraphURLs[chainId]);
        if (res.isSuccess) {
            const project = res.data.project;
            const qfRounds = res.data.qfrounds;
            const qfRound = qfRounds.length > 0 ? qfRounds[0] : null;
            if (qfRound && qfRound.id == project.qfRoundID) {
                return { ...project, isOnQF: true, matchingPool: qfRound.amount }
            }

            return { ...project, isOnQF: false, matchingPool: 0 };
        }

        return null;
    } catch (e) {
        console.log(e, "=========error in get projects============")
        return [];
    }
}
