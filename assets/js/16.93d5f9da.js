(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{313:function(e,t,a){e.exports=a.p+"assets/img/nvidia.672e8e16.png"},411:function(e,t,a){"use strict";a.r(t);var s=a(25),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"disabling-laptop-dgpus-ssdt-dgpu-off-nohybgfx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disabling-laptop-dgpus-ssdt-dgpu-off-nohybgfx"}},[e._v("#")]),e._v(" Disabling laptop dGPUs (SSDT-dGPU-Off/NoHybGfx)")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#what-this-ssdt-does"}},[e._v("What this SSDT does")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#methods-to-make-this-ssdt"}},[e._v("Methods to make this SSDT")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#prebuilts"}},[e._v("Prebuilt")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#ssdttime"}},[e._v("SSDTTime")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#manual"}},[e._v("Manual")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#finding-the-acpi-path"}},[e._v("Finding the ACPI path")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#edits-to-the-sample-ssdt"}},[e._v("Edits to the sample SSDT")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#compiling-the-ssdt"}},[e._v("Compiling the SSDT")])])])])])])]),e._v(" "),s("p",[e._v("So with laptops, we can hide the dGPU from macOS with the little boot-arg called "),s("code",[e._v("-wegnoegpu")]),e._v(" from WhateverGreen. But one small problem, the dGPU is still pulling power draining your battery slowly. We'll be going over 2 methods for disabling the dGPU in a laptop:")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/Laptops/laptop-disable.html#optimus-method"}},[e._v("Optimus Method")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/Laptops/laptop-disable.html#bumblebee-method"}},[e._v("Bumblebee Method")])],1)]),e._v(" "),s("p",[e._v("Note that this is not needed for install, but recommended for post-install")]),e._v(" "),s("h2",{attrs:{id:"optimus-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optimus-method"}},[e._v("#")]),e._v(" Optimus Method")]),e._v(" "),s("p",[e._v("How this works is that we call the "),s("code",[e._v(".off")]),e._v(" method found on Optimus GPUs, this is the expected way to power off a GPU but some may find their dGPU will power back up later on. Mainly seen in Lenovo's, the Optimus method should work for most users:")]),e._v(" "),s("p",[e._v("To start, grab "),s("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/decompiled/SSDT-dGPU-Off.dsl.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-dGPU-Off.dsl"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Next we need to get on Windows, and head to the following:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Device Manager -> Display Adapters -> dGPU -> Properties -> Details > BIOS device name\n")])])]),s("ul",[s("li",[e._v('Note some GPUs may be hiding under "BIOS device name"')])]),e._v(" "),s("p",[e._v("This should provided you with an ACPI path for your dGPU, most commonly:")]),e._v(" "),s("ul",[s("li",[e._v("Nvidia dGPU: "),s("code",[e._v("\\_SB.PCI0.PEG0.PEGP")])]),e._v(" "),s("li",[e._v("AMD dGPU: "),s("code",[e._v("\\_SB.PCI0.PEGP.DGFX")])])]),e._v(" "),s("p",[s("img",{attrs:{src:a(313),alt:"Credit to 1Revenger1 for the image"}})]),e._v(" "),s("p",[e._v("Now with that, we'll need to change the ACPI path in the SSDT. Main sections:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("External(_SB.PCI0.PEG0.PEGP._OFF, MethodObj)\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("If (CondRefOf(\\_SB.PCI0.PEG0.PEGP._OFF)) { \\_SB.PCI0.PEG0.PEGP._OFF() }\n")])])]),s("p",[e._v("Once adapted to your config, head to the compile section")]),e._v(" "),s("ul",[s("li",[e._v("For those with sleep issues, you can refer to the original "),s("a",{attrs:{href:"https://www.tonymacx86.com/threads/guide-disabling-discrete-graphics-in-dual-gpu-laptops.163772/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rehabman thread"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"bumblebee-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bumblebee-method"}},[e._v("#")]),e._v(" Bumblebee Method")]),e._v(" "),s("p",[e._v("With some machines, the simple "),s("code",[e._v(".off")]),e._v(" call won't keep the card off properly, that's where the Bumblebee method comes in. This SSDT will actually send the dGPU into D3 state being the lowest power state a device can support. Credit to Mameo for the original adaptation.")]),e._v(" "),s("p",[e._v("To start, grab "),s("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/decompiled/SSDT-NoHybGfx.dsl.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-NoHybGfx.dsl"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Next we need to get on Windows, and head to the following:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Device Manager -> Display Adapters -> dGPU -> Properties -> Details > BIOS device name\n")])])]),s("p",[e._v("This should provided you with an ACPI path for your dGPU, most commonly:")]),e._v(" "),s("ul",[s("li",[e._v("Nvidia dGPU: "),s("code",[e._v("\\_SB.PCI0.PEG0.PEGP")])]),e._v(" "),s("li",[e._v("AMD dGPU: "),s("code",[e._v("\\_SB.PCI0.PEGP.DGFX")])])]),e._v(" "),s("p",[e._v("Now with that, we'll need to change the ACPI path in the SSDT. Main sections:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("External (_SB_.PCI0.PEG0.PEGP._DSM, MethodObj)    // dGPU ACPI Path\nExternal (_SB_.PCI0.PEG0.PEGP._PS3, MethodObj)    // dGPU ACPI Path\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("If ((CondRefOf (\\_SB.PCI0.PEG0.PEGP._DSM) && CondRefOf (\\_SB.PCI0.PEG0.PEGP._PS3)))\n")])])]),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(' // Card Off Request\n \\_SB.PCI0.PEG0.PEGP._DSM (ToUUID ("a486d8f8-0bda-471b-a72b-6042a6b5bee0"), 0x0100, 0x1A, Buffer (0x04)\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" // Card Off\n\\_SB.PCI0.PEG0.PEGP._PS3 ()\n")])])]),s("p",[e._v("Once adapted to your config, head to the compile section")]),e._v(" "),s("h2",{attrs:{id:"now-you-re-ready-to-compile-the-ssdt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#now-you-re-ready-to-compile-the-ssdt"}},[e._v("#")]),e._v(" "),s("RouterLink",{attrs:{to:"/Manual/compile.html"}},[e._v("Now you're ready to compile the SSDT!")])],1)])}),[],!1,null,null,null);t.default=o.exports}}]);