CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `question` text NOT NULL,
  `realAnswer` varchar(255) NOT NULL,
  `realAnswerImg` varchar(255) NOT NULL,
  `answer1` varchar(255) NOT NULL,
  `answer2` varchar(255) NOT NULL,
  `answer3` varchar(255) NOT NULL,
  `answer4` varchar(255) NOT NULL,
  `img1` text NOT NULL,
  `img2` text NOT NULL,
  `img3` text NOT NULL,
  `img4` text NOT NULL,
  `answered` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `result` (
  `id` int(11) NOT NULL,
  `sender` int(255) NOT NULL,
  `receiver` int(255) NOT NULL,
  `answers` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` text NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` text NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `name`, `token`, `image`) VALUES
(1, 'ABDELLAH', 'elsa@prisma.io', 'abdellah khalid', 'hgjvbisajhflsakf33455d', 'skfskfskaljfik'),
(2, 'ABDELLAH', 'elsa@prisma.io', 'abdellah khalid', 'hgjvbisajhflsakf33455d', 'skfskfskaljfik');