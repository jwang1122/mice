<h1>Mice Project Requirement</h1>

## get data from DB and display on the screen
Create a sqlite database, get data from Excel file, and save the data into DB.

## add new mouse record to DB
add Form for creating new mouse recode into DB.

## find mouse by msid

From 李翔
我说的这个报告其实无所谓什么格式，因为我们之前都是手写，基本上就是类似于这种
7/9/22
1. Move 7239-7254 out of TEB2 to 5xT13(M) and 1xT15(F)
这种是wean breeding pair
2. Kill 5424 5427 5458-60
这种是处死
3. 6427 dead 7/6/22
这种是发现已经死亡的
4. Move 5425-26 (LL LR) from W23 to W3
这是合笼，不过虽然我写了，但是我还没想好怎么标这里的耳洞才好，因为我日常手写都是每一只老鼠标记变化的，像是L→LL, R→LR。
5. Yunting moved E4x5 E8x3 E11x4 to Exp. 22-4, HAD 4wks + luciferin i. p. injection / wk, 7/9-8/9/22
这是使用老鼠做实验的
6. Move 5728 to WB3 for breeding. 
这里需要generate一下breeding pair,，我还不知道你们怎么标记这个呢
7. Cut tails 7426-7468 for genotype 
这是剪尾巴做PCR好确定基因型，这个报告的麻烦是部分崽子还在breeding cage里面，但是他们的老鼠号已经generate了，我不确定我们是应该把这种pups单独放着还是直接放到老鼠的总表里面去，只是标记笼号为breeding cage 的笼号
8. Vet move 5424 out of T23 to T23+ for fighting wound
或者Vet mark 5427 for teeth treatment 
这种是兽医的处理或者要求什么的

其实我不能保证啊，主管上我是不会编重号的。只不过万一重号了，我会把一些改成别的号码啊。而且有时候老鼠从妈妈肚子里出来了以后，我先编号，等着做完了genotype才会知道不是我以为的爸爸的，而是另外一个的，也得重新编号

我的理解是7235-7254是两只配对的老鼠.
不是哒，这是生出来的pups要分笼了。一般breeding pair指的是一公一母，一次性可能会生1-13只pups，理论上如果一对老鼠一直在一个笼子里面，最快每21天要生产一次，所以到差不多21天的时候我们就要看看母鼠有没有怀孕，如果有，就要不超过21天分笼，就是把小老鼠分出去。我是希望这个软件可以19-21天的时候提示一下要分笼了

那么TEB2是什么呢？是cage吗？
T和E是我的一种老鼠基因型，后面带B结尾的都是breeding cage。所以这个实际上是我的Tie2 和 Ezh2 两种老鼠的杂交breeding cage

cage的名称是固定的吗？有多少的不同？如果多，我们可以给cage制作一个数据库，和老鼠链接起来，这样你就可以随时掌握哪个cage里住的哪几个鼠，也可以掌握哪个鼠住哪个cage。
我们老鼠是在动物房统一饲养的，那边提供一种塔状老鼠饲养笼。你可以想像一下，上下一共十层，每层相当于一个pizza，均分成十分🍕，老鼠笼就是这种三角形的塑料盒子，可以方便的抽出来。所以每个笼子其实有两个号码，一个是我给的，一个是架子上的位置编号。只不过因为我常常给老鼠换位置，比如说把同一个实验的老鼠抽出来放到一起。所以架子编号我基本上不用，只用我自己给老鼠笼子编的号

这种笼子固定只能装不超过5只老鼠，按笼按天收费，所以我会经常把2-3只的笼子合并成一笼五只，老鼠换笼子比较常见，不过您说的“随时掌握哪个cage里住的哪几个鼠，也可以掌握哪个鼠住哪个cage。”我觉得非常好，我好想要，这样我整理笼子的时候可以很方便的把不足五只的笼子拼起来

## Design a Daily action DB
[design of DB table for daily action](actions.xlsx)



mouse_id is actually unique and serves the same purpose as id

geno is irrelevant

ear is which ear my parents punched a hole into to identify the living mice against each other since there are 5 mice in a cage and they look identical

mom and dad use Ms_id

cage is cage

user/usage is what the mice is being used for

date means when this mouse should or has died

add navigation bar :) [navigationbarexample](../../myreact/src/App9.js)

the actions.xlsx should be a *small* summary of the actions

design a report for all of the possible actions

create breeding system to add mice in large quantities.

