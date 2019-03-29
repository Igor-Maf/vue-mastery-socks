export const namespaced = true;

export const state = {
    user: {
        id: 1,
        name: 'Ihor Gevorkyan',
        role: 'admin',
        creator: false
    }
};

export const mutations = {
    CHANGE_CREATOR(state, isCreator) {
        state.user.creator = isCreator;
    }
};

export const actions = {
    setCreatorValue({ commit }, isCreator = true) {
        commit('CHANGE_CREATOR', isCreator)
    }
};
