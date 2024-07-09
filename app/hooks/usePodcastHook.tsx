import { useStores } from "app/models"
import { delay } from "app/utils/delay"

export const usePodcastHook = () => {
    const { episodeStore } = useStores()

    const fetchEpisodesAsync = async () => {
        await Promise.all([episodeStore.fetchEpisodes(), delay(750)])
    }

    return {
        episodes: episodeStore.episodes,
        favorites: episodeStore.favorites,
        fetchEpisodesAsync,
    };
}