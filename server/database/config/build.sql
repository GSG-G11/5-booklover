BEGIN;
drop table if exists Books;
create table Books (
    id serial primary key,
    name varchar(255) not null,
    description text not null,
    price int not null,
    category varchar(100) not null,
    author varchar(100) not null,
    imageUrl text not null
);
INSERT INTO
    Books (name, description, price, category, author, imageUrl)
    values
    (
        'The Diary of a Young Girl',
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        14.5,
        'History',
        'Anne Frank',
        'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9789352782772_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
    ),
    (
        'Night (The Night Trilogy, #1)',
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        50,
        'Romance',
        'Elie Wiesel',
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1575073611l/1617.jpg'
    ),
    (
        'To Kill a Mockingbird',
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        19.9,
        'Sicfi & Fantasy',
        'Harper Lee',
        'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780060935467_p0_v12%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
    ),
    (
        'The Great Gatsby',
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        200,
        'Teen & Young Adult',
        'F.Scott Fitzgerald',
        'https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_FMjpg_UX999_.jpg'
    ),
    (
        'The Diary of a Young Girl',
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        14.5,
        'History',
        'Anne Frank',
        'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9789352782772_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
    ), 
    (
        'They Both Die at the End',
        'Adam Silvera reminds us that there’s no life without death and no love without loss in this devastating yet uplifting story about two people whose lives change over the course of one unforgettable day.',
        59.99,
        'Romance',
        'Adam Silvera',
        'https://covers.zlibcdn2.com/covers299/books/45/83/65/458365e0a86de3b6392feb97c110647e.jpg'
    ),
    (
        'Call Me by Your Name',
        'Now a Major Motion Picture from Director Luca Guadagnino, Starring Armie Hammer and Timothée Chalamet',
        120,
        'Romance',
        'Aciman André',
        'https://covers.zlibcdn2.com/covers299/books/40/51/83/405183f3112420925a2bfa400182087b.jpg'
    ),
    (
        'Self Discipline Mindset: Why Self Discipline Is Lacking in Most and How to Unleash It Now',
        'This book has actionable information that will help you to supercharge your self-discipline to achieve great feats in life.',
        29.99,
        'Literature & Fiction',
        'Curtis Leone',
        'https://covers.zlibcdn2.com/covers299/books/c2/52/cc/c252cc1bc99664b9891890dd8497af0e.jpg'
    ), 
    (
        'The Oxford Essential Guide to Writing',
        '1A Concise Course in the Art of Writing Whether you are composing a letter, writing a school thesis, or starting a novel',
        85.99,
        'Biographies & Memory',
        'Thomas S. Kane',
        'https://covers.zlibcdn2.com/covers299/books/8b/a5/7d/8ba57dee45450d0af36fd3b80139e930.jpg'
    ),
    (
        'Legacy of Love: Biblical Wisdom for Parenting Teens and Young Adults',
        'Applying sacred Scripture, Church teaching, and pastoral wisdom,Legacy of Lovehelps you explore strategies and tips to fully engage with your teens and young adults. Kimberly Hahn offers tools for: Coping with teenage rebellion and setting boundaries Nurturing the teenage soul Encouraging young adults for healthy dating and courtship Becoming an in-law and the joys of being a grandparentLegacy of Lovealso includes chapters on compassion, humility, and how your family faith can make a difference in society. Discussion questions help you apply the material to your own life and make the book a valuable resource for small group discussion. The book is the fourth in a series of Bible studies based on Proverbs 31.',
        12,
        'Teen & Young Adult',
        'Kimberly Hahn',
        'https://covers.zlibcdn2.com/covers299/books/0d/71/5a/0d715a0ee3b2821127ecf15aefc276b4.jpg'
    ), 
    (
        'The Hawthorne Legacy',
        'Intrigue, riches, and romance abound in this thrilling sequel to the New York Times bestselling The Inheritance Games perfect for fans of Karen McManus and Holly Jackson.',
        59.99,
        'Literature & Fiction',
        'Jennifer Lynn Barnes',
        'https://covers.zlibcdn2.com/covers299/books/fd/a3/97/fda397379c660f01a58d27551d71b6de.jpg'
    ),
    (
        'The Deal (Off-Campus #1)',
        'The first book in an all new series featuring college hockey stars and the women they fall for, by New York Times bestseller Elle Kennedy.',
        99.99,
        'Romance',
        'Elle Kennedy',
        'https://covers.zlibcdn2.com/covers299/books/0a/d9/f0/0ad9f05edc08979102ba0e2d0e2ae1ac.jpg'
    ),
    (
        'Shatter Me (Shatter Me #1)',
        'One touch is all it takes. One touch, and Juliette Ferrars can leave a fully grown man gasping for air. One touch, and she can kill.',
        14.99,
        'Literature & Fiction',
        'Tahereh Mafi',
        'https://covers.zlibcdn2.com/covers299/books/5f/08/98/5f0898770d0cb42d21cd91f55eab70ea.jpg'
    ),
    (
        'The Science of Cooking: Every Question Answered to Perfect Your Cooking',
        'Get answers to all your cooking science questions, and cook tastier, more nutritious food using fundamental principles, practical advice, and step-by-step techniques.',
        120,
        'Cookbook & Food',
        'Stuart Farrimond',
        'https://covers.zlibcdn2.com/covers299/books/28/67/3b/28673b5e183998071d363e53bf7f4230.jpg'
    ),
    (
        'History of the World Map by Map',
        'More than 140 detailed maps tell the story of pivotal episodes in world history, from the first human migrations out of Africa to the space race.',
        45,
        'History',
        'Dorling Kindersley',
        'https://covers.zlibcdn2.com/covers299/books/cc/6f/3c/cc6f3ccbf0c8b0600da8c4d26fb269af.jpg'
    ),
    (
        'Street Photography: The Art of Capturing the Candid Moment',
        'Since the advent of the camera, there have been photographers whose mission is to record and interpret the public sphere in all its aspects.',
        19.99,
        'Arts & Photography',
        'Gordon Lewis',
        'https://covers.zlibcdn2.com/covers299/books/13/9f/8d/139f8d6a406af850f408d2b16f014697.jpg'
    ),
    (
        'Heartstopper - Boy meets boy',
        'Charlie, a highly-strung, openly gay over-thinker, and Nick, a cheerful, soft-hearted rugby player, meet at a British all-boys grammar school. Friendship blooms quickly, but could there be something more...?',
        10,
        'Childrens Book',
        'Alice Oseman',
        'https://covers.zlibcdn2.com/covers299/books/f1/a8/a3/f1a8a3760ff44591f40aea99c524403e.jpg'
    ),
    (
        'Fatal fictions : crime and investigation in law and literature',
        'Lawyers and fiction writers have always confronted crime and punishment. This age-old fascination with crime on the part of both authors and readers is not surprising, given that criminal justice touches on so many political and psychological themes essential to literature, and comes equipped with a trial process that contains its own dramatic structure. This essay collection explores this profound and enduring literary engagement with crime and criminal justice. The essays in this collection span a wide array of genres, including tragic drama, science fiction, lyric poetry, autobiography, and mystery novels. The works discussed include works as old as fifth-century BCE Greek tragedy and as recent as contemporary novels, memoirs, and mystery novels. The cumulative result is arresting: there are "killer wives" and crimes against trees; a government bureaucrat who sends political adversaries to their death for treason before falling to the same fate himself.',
        29.99,
        'Literature & Fiction',
        'Alison L.LaCroix',
        'https://covers.zlibcdn2.com/covers299/books/4b/1f/9b/4b1f9bc89e765c69b527306953f649fd.jpg'
    ),
    (
        'The Disorganized Mind: Coaching Your ADHD Brain to Take Control of Your Time, Tasks, and Talents',
        'For the millions of adults diagnosed with ADHD The Disorganized Mind will provide expert guidance on what they can do to make the most of their lives. The inattention, time-mismanagement, procrastination, impulsivity, distractibility, and difficulty with transitions that often go hand-in-hand with ADHD can be overcome with the unique approach that Nancy Ratey brings to turning these behaviors around.',
        45,
        'Biographies & Memory',
        'Nancy A. Ratey',
        'https://covers.zlibcdn2.com/covers299/books/ca/23/c5/ca23c5e5b4665992dd15fda5b5ce2bd6.jpg'
    ),
    (
        'Hammer and Shadow (Dungeons & Dragons d20 3.5 Fantasy Roleplaying, Midnight Setting)',
        'A century ago, the forces of darkness overran Eredane and subjugated all its peoples to the will of the dark god Izrador. Almost. In what remains of their mountain holdfasts in the Kaladruns, the dwarves still resist. It has been barely a dwarven generation since the Shadow fell, and living dwarves still remember freedom. They have the finest weapons and armor on the face of Aryth, traps devilish enough to kill a thousand orcs, and a legendary stubbornness in the face of adversity. It is not enough. Every day in the world of Midnight the dwarves are losing their war against the numberless servants of Izrador. Hammer and Shadow includes: Dozens of forces, NPCs, and location descriptions for the Kaladrun Mountains and the armies that assault them. Maps, adventure hooks, and local rumors to incorporate into any Midnight campaign.',
        115,
        'Sicfi & Fantasy',
        'Fantasy Flight ',
        'https://covers.zlibcdn2.com/covers299/books/8e/49/c0/8e49c05a28b99b02ca575e0c5f786e42.jpg'
    ),
    (
        'Psychoanalytic Reflections on Parenting Teens and Young Adults: Changing Patterns in Modern Love, Loss, and Longing',
        'Psychoanalytic Reflections on Parenting Teens and Young Adults explores the rich, multi-layered parent-child interactions that unfold during the period of separation and launching. While this is a necessary transitional time, parents inevitably experience feelings of loss and longing for the past as well as hope for the future.',
        100,
        'Teen & Young Adult',
        'Anne J. Adelman',
        'https://covers.zlibcdn2.com/covers299/books/b8/01/f5/b801f58be788adf97d21b6023d8d0480.jpg'
    ),
    (
        'Christian Finance for Teens: A Simple Guide to Financial Wisdom for Teens and Young Adults',
        'Christian Finance for Teens: A Simple Guide to Financial Wisdom for Teens and Young Adults',
        15,
        'Teen & Young Adult',
        'Cindy Kersey',
        'https://covers.zlibcdn2.com/covers299/books/85/20/4e/85204edce5930d60df12164a00ca4130.jpg'
    ),
    (
        'Harry Potter series',
        'The adventures of Harry Potter, the Boy Who Lived, and his wand-wielding friends at the Hogwarts School of Witchcraft and Wizardry. Harry, Ron and Hermione must master their craft and battle the machinations of the evil wizard Voldemort and his Death Eaters.',
        100,
        'Teen & Young Adult',
        'J.K. Rowling',
        'https://media.npr.org/assets/bakertaylor/covers/manually-added/harry-potter_custom-61a3782c85bb56dfb89436be2ec11cfaf5b84201-s500-c85.webp'
    ),
    (
        'The Hunger Games series',
        'In the ruins of a future North America, a young girl is picked to leave her impoverished district and travel to the decadent Capitol for a battle to the death in the savage Hunger Games. But for Katniss Everdeen, winning the Games only puts her deeper in danger as the strict social order of Panem begins to unravel.',
        70,
        'Teen & Young Adult',
        'Suzanne Collins',
        'https://media.npr.org/assets/bakertaylor/covers/t/the-hunger-games/9780439023528_custom-49e9c33a338d97f0abb78402bcdee9b1103f33a0-s500-c85.webp'
    ),
    (
        'To Kill a Mockingbird',
        'Author Harper Lee explores racial tensions in the fictional "tired old town" of Maycomb, Ala., through the eyes of 6-year-old Scout Finch. As her lawyer father, Atticus, defends a black man accused of rape, Scout and her friends learn about the unjust treatment of African-Americans — and their mysterious neighbor, Boo Radley.',
        120,
        'Teen & Young Adult',
        'Harper Lee',
        'https://media.npr.org/assets/bakertaylor/covers/t/to-kill-a-mockingbird/9780060935467_custom-b86b41b7267a0af1f40c1fed963206e49c03ad56-s500-c85.webp'
    ),
    (
        'The Hobbit',
        'Bilbo Baggins, a respectable, well-to-do hobbit, lives comfortably in his hobbit hole until the day the wandering wizard Gandalf chooses him to take part in an adventure from which he may never return.',
        90,
        'Teen & Young Adult',
        'J.R.R. Tolkien',
        'https://media.npr.org/assets/bakertaylor/covers/h/hobbit-or-there-and-back-again/9780345339683_custom-70a1718cd320dd9557789bbb7a1a004349156b48-s500-c85.webp'
    ),
    (
        'The Lord Of The Rings',
        'Tolkien seminal three-volume epic chronicles the War of the Ring, in which Frodo the hobbit and his companions set out to destroy the evil Ring of Power and restore peace to Middle-earth. The beloved trilogy still casts a long shadow, having established some of the most familiar and enduring tropes in fantasy literature.',
        40,
        'Sicfi & Fantasy',
        'J.R.R. Tolkien',
        'https://media.npr.org/assets/bakertaylor/covers/t/the-lord-of-the-rings/9780618640157_custom-bd5c36cb700fafac72208e5f622a6d1a9ca85489-s500-c85.webp'
    ),
    (
        'The Hitchhikers Guide To The Galaxy',
        'In the first, hilarious volume of Adams Hitchhikers series, reluctant galactic traveler Arthur Dent gets swept up in some literally Earth-shattering events involving aliens, sperm whales, a depressed robot, mice who are more than they seem, and some really, really bad poetry.',
        140,
        'Sicfi & Fantasy',
        'Douglas Adams',
        'https://media.npr.org/assets/bakertaylor/covers/t/the-hitchhikers-guide-to-the-galaxy/9780345391803_custom-94fb9d4ba936bf0e6dff52bf2b7ad8c866f82470-s500-c85.webp'
    ),
    (
        'Enders Game',
        'Young Andrew "Ender" Wiggin, bred to be a genius, is drafted to Battle School where he trains to lead the century-long fight against the alien Buggers.',
        200,
        'Sicfi & Fantasy',
        'Orson Scott Card',
        'https://media.npr.org/assets/bakertaylor/covers/e/enders-game/9780812550702_custom-14b6b3e2b8be027acc868fa0aba0670be8900168-s500-c85.webp'
    ),
    (
        'Indigo',
        'Like so many of the authors whose names came up in this poll, it was hard to pick just one Beverly Jenkins book, but both our readers and our panelists agree, this story of love on the Underground Railroad is a standout favorite. Coming in a close second was another historical romance, Topaz, about a feisty newspaperwoman who ends up married, only slightly against her will, to a handsome deputy marshal.',
        170,
        'Romance',
        'Beverly Jenkins',
        'https://media.npr.org/assets/bakertaylor/covers/i/indigo/9780595002023_custom-21edff9d0487c6f1c96a3ddb73d7646cec5ce9d0-s500-c85.webp'
    ),
    (
        'Outlander (series)',
        'One of the most popular picks in our poll, Diana Gabaldons swashbuckling, century-spanning tale of a World War II nurse who tumbles backward in time to the Scottish Highlands in 1743 — and falls in love with a roguish young soldier — is now a hit television series.',
        300,
        'Romance',
        'Diana Gabaldon',
        'https://media.npr.org/assets/bakertaylor/covers/o/outlander/9780440423201_custom-096138b12fdc9df15fd46ab1cee4a5ecdb228186-s500-c85.webp'
    ),
    (
        'Texas Destiny',
        'Houston Leigh survived the Civil War, though badly scarred both inside and out. But will he survive a dangerous journey along the wild trails of Texas with Miss Amelia Carson, his handsome brother mail-order bride?',
        80,
        'Romance',
        'Lorraine Heath',
        'https://media.npr.org/assets/bakertaylor/covers/t/texas-destiny/9780451407528_custom-4367fc3c07054a28cc500dd3a4ab14ddd8662a7c-s500-c85.webp'
    ),
    (
        'The Exhibitionist',
        'Meet the Hanrahan family, gathering for a momentous weekend as famous artist and notorious egoist Ray Hanrahan prepares for a new exhibition of his art – the first in many decades – and one he is sure will burnish his reputation for good. His three children will be there: beautiful Leah, sensitive Patrick, and insecure Jess, the youngest, who has a momentous decision to make. . .',
        120,
        'Literature & Fiction',
        'Charlotte Mendelson',
        'https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529052749.jpg'
    ),
    (
        'Concerning My Daughter',
        'A mother lets her thirty-something daughter – Green – move into her apartment, with dreams that she will find a good job and a good husband to start a family with. But Green arrives with her girlfriend Lane, and her mother finds it hard to be civil. She is similarly unaccepting of her daughters entanglement in a case of unfair dismissal from her university employers',
        250,
        'Literature & Fiction',
        'Kim Hye-jin',
        'https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529057676.jpg'
    );
COMMIT;