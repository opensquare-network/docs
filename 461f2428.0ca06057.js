(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),l=n(7),o=(n(0),n(82)),i={id:"pallets",title:"Pallets",slug:"architecture"},r={unversionedId:"pallets",id:"pallets",isDocsHomePage:!1,title:"Pallets",description:"Basic bounty workflow",source:"@site/docs/pallets.md",slug:"/architecture",permalink:"/architecture",editUrl:"https://github.com/opensquare-network/docs/tree/master/website/docs/pallets.md",version:"current",sidebar:"docs",previous:{title:"Bounty Flow",permalink:"/getting-started/bounty-flow"}},b=[{value:"Basic bounty workflow",id:"basic-bounty-workflow",children:[{value:"Roles:",id:"roles",children:[]},{value:"A example workflow",id:"a-example-workflow",children:[]}]},{value:"Pallets",id:"pallets",children:[{value:"bounties pallet",id:"bounties-pallet",children:[]},{value:"reputation pallet",id:"reputation-pallet",children:[]},{value:"mining pallet",id:"mining-pallet",children:[]}]}],c={rightToc:b};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"basic-bounty-workflow"},"Basic bounty workflow"),Object(o.b)("p",null,"Currently we implement a basic workflow which support OneFunderOneHunter bounty collaboration. You can check the details in the bounty workflow section. But you can check following content for a general view."),Object(o.b)("h3",{id:"roles"},"Roles:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Funder: who create and fund bounty."),Object(o.b)("li",{parentName:"ul"},"Hunter: who hunt bounty and work for the assigned bounty."),Object(o.b)("li",{parentName:"ul"},"Council: who review funders' bounty application and give feedback(yes or no). ")),Object(o.b)("h3",{id:"a-example-workflow"},"A example workflow"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Alice(funder) create a bounty with 1000 native token funded, and waiting for the council to review."),Object(o.b)("li",{parentName:"ol"},"The council review the bounty and give the review result(Yes or No)."),Object(o.b)("li",{parentName:"ol"},"Bob(hunter) can see the bounty and do hunting for the bounty."),Object(o.b)("li",{parentName:"ol"},"Alice see the hunting for the bounty and assign the bounty to Bob."),Object(o.b)("li",{parentName:"ol"},"Bob finish the work and do a submission for the bounty."),Object(o.b)("li",{parentName:"ol"},"Alice resolve the bounty and give Bob 'Perfect' remark. Several things will happen:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Then 900 will be sent to Bob, while 100 will be sent to the council. "),Object(o.b)("li",{parentName:"ul"},"Bob will get 2 times reputation added, one for resolving the bounty and another for the remark. "),Object(o.b)("li",{parentName:"ul"},"Alice and Bob will get mining power. The total power will be decided by the fee the council got, and 90% of the power will be assigned to funder and 10% to hunter."))),Object(o.b)("li",{parentName:"ol"},"Bob give a 'Perfect' remark to Alice, and then Alice will get a reputation grow.")),Object(o.b)("h2",{id:"pallets"},"Pallets"),Object(o.b)("p",null,"We build our business based on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/paritytech/substrate"}),"Substrate"),". There are mainly 3 pallets involved to support the business."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/opensquare-network/opensquare/tree/w3f-m1-0/ospallet/bounties"}),"bounties")," pallet manages the lifecycle of a bounty."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/opensquare-network/opensquare/tree/w3f-m1-0/ospallet/reputation"}),"reputation")," pallet manages each role's reputation."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/opensquare-network/opensquare/tree/w3f-m1-0/ospallet/mining"}),"mining")," pallet manages users' session related mining power and handle the native token mint logic.")),Object(o.b)("p",null,"Functions in reputation and mining pallets will be called by some calls in bounties pallet. For example: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/opensquare-network/opensquare/blob/w3f-m1-0/ospallet/bounties/src/lib.rs#L201"}),"resolve_bounty_and_remark")," is called, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/opensquare-network/opensquare/blob/w3f-m1-0/ospallet/reputation/src/lib.rs#L49"}),"add_behavior_score_by_behavior"),",\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/opensquare-network/opensquare/blob/w3f-m1-0/ospallet/mining/src/lib.rs#L113"}),"add_mining_power")," will be called to add reputation nd mining power to hunter."),Object(o.b)("li",{parentName:"ul"},"When ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/opensquare-network/opensquare/blob/w3f-m1-0/ospallet/bounties/src/lib.rs#L248"}),"remark_bounty_funder")," is called, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/opensquare-network/opensquare/blob/w3f-m1-0/ospallet/reputation/src/lib.rs#L49"}),"add_behavior_score_by_behavior")," is called to add funder's reputation.")),Object(o.b)("h3",{id:"bounties-pallet"},"bounties pallet"),Object(o.b)("p",null,"The bounties module provide management for bounties. Generally speaking, it facilitate the collaborations between\nfunders, hunters and the council."),Object(o.b)("h4",{id:"funder-calls"},"Funder calls"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"create_bounty"),": Create a bounty and deposit the fund, and this bounty will be reviewed by the council."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"assign_bounty"),": Assign the bounty to one applicant."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"close_bounty"),": Close the bounty."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"resolve_bounty_and_remark"),": Resolve the bounty and the fund will be sent to the assigned hunter, while some fee will be charged by the council.")),Object(o.b)("h4",{id:"hunter-calls"},"Hunter calls"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"hunt_bounty"),": Apply a accepted bounty."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"submit_bounty"),": Submit the work result for the assigned bounty."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cancel_bounty"),": Cancel the application for the bounty."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"resign_from_bounty"),": Resign from a assigned bounty."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"remark_bounty_funder"),": Remark the bounty funder after the funder resolve the bounty and give the remark to hunter.")),Object(o.b)("h4",{id:"council-calls"},"Council calls"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"examine_bounty"),": Give the review result for a bounty."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"force_close_bounty"),": Force close a bounty. The reasons may include outdated description, longtime no applicants.")),Object(o.b)("h3",{id:"reputation-pallet"},"reputation pallet"),Object(o.b)("h4",{id:"terminology"},"Terminology"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"CollaborationUnit: A interaction of between roles of OpenSquare."),Object(o.b)("li",{parentName:"ul"},"CollaborationResult: The result of a collaboration, usually the result will be with a enum type."),Object(o.b)("li",{parentName:"ul"},"Behavior: It'a union of all collaboration results.")),Object(o.b)("h4",{id:"current-behaviors-defined"},"Current Behaviors defined"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),'#[cfg_attr(feature = "std", derive(Serialize, Deserialize))]\npub enum BountyResolveCollaborationResult {\n    Success,\n    Fail,\n}\n\n#[derive(PartialEq, Eq, Clone, Encode, Decode, RuntimeDebug)]\n#[cfg_attr(feature = "std", derive(Serialize, Deserialize))]\npub enum BountyRemarkCollaborationResult {\n    Bad,\n    NotGood,\n    Fine,\n    Good,\n    Perfect,\n}\n\n// Behavior represent the general collaboration result\n#[cfg_attr(feature = "std", derive(Serialize, Deserialize), serde(untagged))]\npub enum Behavior {\n    BountyResolve(BountyResolveCollaborationResult),\n    BountyRemark(BountyRemarkCollaborationResult),\n}\n')),Object(o.b)("h4",{id:"reputation-score"},"Reputation Score"),Object(o.b)("p",null,"Each Behavior(CollaborationResult) has a corresponding reputation score."),Object(o.b)("h4",{id:"interfaces"},"Interfaces"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"fn add_behavior_score_by_behavior(target: &AccountId, behavior: &Behavior);\n")),Object(o.b)("p",null,"This interface will be called in collaboration modules(bounties). The ",Object(o.b)("inlineCode",{parentName:"p"},"behavior")," param will be different based on the caller module's business."),Object(o.b)("h3",{id:"mining-pallet"},"mining pallet"),Object(o.b)("h4",{id:"terminology-1"},"Terminology"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Session: Each session contains a fixed number of blocks(currently 43200)."),Object(o.b)("li",{parentName:"ul"},"SessionIndex: It begins with 0 and grows 1 after each 43200 blocks.")),Object(o.b)("h4",{id:"mining-logic"},"Mining logic"),Object(o.b)("p",null,"One session is a mining period, while the max of the total mint token will be 1% of the total issuance. The mint token\ncan be claimed after the session, and each miners' mining power will decide how much token they can claim."),Object(o.b)("p",null,"For example, total issuance is 10,000, and total mining power is 100, while Alice's mining power is 10. So Alice can mine\n10 / 100 ",Object(o.b)("em",{parentName:"p"}," 10000 ")," 0.01 = 10 in this session."),Object(o.b)("p",null,"The mining power is decided by the fee the council charged. For example, the bounty fund total 1000 OSN and 50 will be charged by the council.\nThe total mining power for this bounty will be 50 * OSN_currency_ration. Each currency has a currency ratio, and currency ratio of OSN is 1.\nSo 50 will be the total mining power for the bounty. Funder and hunter will get 90% and 10% of the mining power, so funder get 45 and hunter get 5."),Object(o.b)("h4",{id:"interfaces-1"},"Interfaces"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"claim(session_index: SessionIndex)"),": Claim the native token based on the caller's mining power for the target session."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"add_mining_power(target: &T::AccountId, power: MiningPower)"),": Called by other modules to add mining power for one target account."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"add_session_total_mining_power(power: MiningPower)"),": Called by other modules to add the session total mining power.")))}u.isMDXComponent=!0}}]);