import user from './user';
import interest from './interest';
import feed from './feed';
import saved from './saved';
import reservation from './reservation';
import card from './card';

module.exports = {
    ...user,
    ...interest,
    ...feed,
    ...saved,
    ...reservation,
    ...card
}