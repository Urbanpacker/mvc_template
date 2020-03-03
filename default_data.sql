SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+01:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Structure de la table `users`
--
CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `userName` varchar(150) NOT NULL,
  `userPass` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Mot de passe (hash sha512): P2JSGQF239
--
INSERT INTO `users` (`userId`, `userName`, `userPass`) VALUES
(1, 'admin', '86ce4e2762c6faea19a283f6528e269442fa484fc568ac99384486dfac8d237b942cab6506b884f3d391e31d9f0dfdc5273a8eaed9a77f83c9531f16d3ce94fb');

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;


--
-- Structure de la table `images`
--
CREATE TABLE `images` (
  `imageId` int(11) NOT NULL,
  `imagePath` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `images` (`imageId`, `imagePath`) VALUES
(1, 'img/error.png'),
(2, 'img/favicon.png');

--
-- Index pour la table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`imageId`);

--
-- AUTO_INCREMENT pour la table `images`
--
ALTER TABLE `images`
  MODIFY `imageId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
