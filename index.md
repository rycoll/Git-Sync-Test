---
layout: default
_sitemapIgnore: true
eleventyComputed:
  author: '{{ globalAuthor }}'
  imageAlt: '{{description}}'
  eleventyNavigation:
    key: '{{title}}'
translate: false
date: 2025-02-14T13:00:00+08:00
title: 低功耗蓝牙
shortDesc: Bluetooth LE
metaDesc: 低功耗蓝牙, 蓝牙5, 款蓝牙5.4 SoC, OTA DFU, bluetooth le, ble, bluetooth low energy
imagePath: /assets/images/ble-hero.jpg
tags:
  - ble
  - bluetooth le
infocenter:
  - title: nRF54L Series
    url: /tag/nrf54l/
  - title: nRF5340 系统级芯片(SoC)
    url: /products/nrf5340/
  - title: nRF52 系统级芯片(SoC)
    url: /tag/nrf52/
devtool:
  - title: nRF5340 DK 开发套件
    url: /tools/nrf5340dk/
  - title: Thingy:53
    url: /tools/thingy53/
  - title: nRF52840 DK 开发套件
    url: /tools/nrf52840dk/
  - title: nRF52833 DK 开发套件
    url: /tools/nrf52833dk/
  - title: nRF52 DK 开发套件
    url: /tools/nrf52dk/
  - title: nRF52840 Dongle
    url: /tools/nrf52840dongle/
  - title: Power Profiler Kit 2
    url: /tools/ppk2/
software:
  - title: nRF Connect SDK
    url: /tools/nrfconnectsdk/
keyFeatures:
  - 高效
  - 低成本
  - 可互操作
  - 2 Mbps
  - 覆盖范围广
  - 确保隐私和安全
keywords:
  - 低功耗蓝牙
  - 蓝牙6
  - 蓝牙5.4 SoC
  - OTA DFU
  - bluetooth le
  - bluetooth low energy
  - ble
  - bluetooth soc
  - nrf52
  - nrf53
  - nrf54
  - channel sounding
  - 信道探测
---
## 开发人员的首选

Nordic 的Bluetooth® Low Energy解决方案受到成千上万开发人员的信赖，占据了 40% 的市场份额，是他们的首选，每天有 200 多万个无线 SoC（系统级芯片）出货，用于全球的创新型物联网产品。

### 为什么选择 Nordic 的低功耗蓝牙解决方案？

**强大的无线 SoC 产品组合：** 我们丰富的超低功耗无线 SoC 选件具有可扩展的内存配置和功能集，可满足各种需求。如果存储器或功能要求发生意外变化，这也为开发过程提供了灵活性。

**超低功耗 MCU 功能和 2.4 GHz 无线电：** 我们的小型超低功耗无线 SoC 选件集成了高效 MCU（微控制器单元）功能和高性能多协议 2.4 GHz 无线电以及功能强大的外设，使您能够打造最小、最省电的物联网产品。

**功能齐全的认证蓝牙 LE 协议栈：** 作为蓝牙标准开发的主要贡献者之一，我们确保我们的蓝牙低功耗协议栈支持所有强制和可选功能。通过全面的可重复使用认证，我们的协议栈可提供具有行业领先互操作性的强大蓝牙 LE 通信。

**经过验证的质量、可靠性和互操作性：** 在数以千计的开发人员和数十亿无线 SoC 出货量的支持下，我们的解决方案可提供无与伦比的质量和可靠性。我们的蓝牙 LE 协议栈可与从智能手机到平板电脑和智能手表的所有产品实现经过验证的互操作性。

**专为开发人员打造：** 我们的解决方案简单易用，拥有功能强大的软件和工具、全面的技术支持、全面的文档和实践在线课程，使您能够专注于创建使您的物联网产品脱颖而出的功能。

## **蓝牙信道探测（Bluetooth® Channel Sounding）**

开启新的应用领域，并探索现有产品的增强可能性，具有可靠的近距离感知和测距功能，在短距离和较远距离均有效。

**蓝牙信道探测** 是低功耗蓝牙的一个即将到来的特性。它将通过内置的安全功能和无缝互操作实现准确和安全的距离测量。nRF54系列将支持信道探测。

**Nordic Distance Toolbox (NDT)** 是一个替代的专有测距解决方案，基于证明良好的测量方法。nRF52和nRF53系列均支持NDT。

### 信道探测与手机

虽然该技术可在任何蓝牙6.0设备上实现，但预计手机将成为推动信道探测技术普及的主要力量。手机将负责管理算法任务，从而开发出能够无缝承担反射器角色的简单互操作产品。随着Android 16版本发布引入RangingManager API，信道探测的软件支持已向公众开放。

为完善该功能，适用于Android的[nRF Toolbox](https://www.nordicsemi.com/Products/Development-tools/nRF-Toolbox)移动应用现已集成信道测距模式，兼容手机可与蓝牙信道测距反射器交互，并在屏幕上显示彼此间的距离。该应用采用开源模式，可作为参考模板供开发者在自有Android应用中集成信道测距功能。欲深入了解nRF Toolbox应用的信道测距特性，请参阅<a href="https://devzone.nordicsemi.com/nordic/nordic-blog/b/blog/posts/evaluating-bluetooth-channel-sounding-with-our-open_2d00_source-android-app-on-google-pixel-10" target="_blank" rel="noopener">DevZone的技术博客文章</a>。

nRF54系列所有产品均搭载全新射频模块，该模块基于Nordic多年技术积淀从零打造，全面支持蓝牙信道探测功能。nRF54L系列所有设备均支持信道探测功能。nRF Connect SDK中的<a href="https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/bluetooth/channel_sounding_ras_reflector/README.html" target="_blank" rel="noopener">蓝牙信道探测反射器与测距响应器</a>示例程序，已在首批支持蓝牙信道探测硬件的手机（如Google Pixel 10）上实现开箱即用。

### 了解**Channel Sounding**

#### 内置测距算法的发起器

在蓝牙信道探测中，发起器包含应用层算法，可将蓝牙物理层和协议栈提供的原始数据转换为距离测量值。Nordic Semiconductor的<a href="https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/bluetooth/channel_sounding_ras_initiator/README.html#channel-sounding-ras-initiator" rel="noreferrer noopener" target="_blank" class="fui-Link ___1q1shib f2hkw1w f3rmtva f1ewtqcl fyind8e f1k6fduh f1w7gpdv fk6fouc fjoy568 figsok6 f1s184ao f1mk8lai fnbmjn9 f1o700av f13mvf36 f1cmlufx f9n3di6 f1ids18y f1tx3yz7 f1deo86v f1eh06m1 f1iescvh fhgqx19 f1olyrje f1p93eir f1nev41a f1h8hb77 f1lqvz6u f10aw75t fsle3fq f17ae5zn" title="https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/bluetooth/channel_sounding_ras_initiator/readme.html#channel-sounding-ras-initiator">信道探测发起器（含测距请求器样本</a>）内置开放且可免费使用的逆傅里叶变换算法，适用于简单测距场景。

针对更复杂的测距需求，Nordic Semiconductor与合作伙伴公司协作，提供定制化算法以满足特定应用场景，例如室内定位系统中的三边测量技术。

#### 具有通用兼容性的反射器

信道探测反射器通过反射发起方发送的音调来响应通信。Nordic Semiconductors<a href="https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/bluetooth/channel_sounding_ras_reflector/README.html#channel-sounding-ras-reflector" rel="noreferrer noopener" target="_blank" class="fui-Link ___1q1shib f2hkw1w f3rmtva f1ewtqcl fyind8e f1k6fduh f1w7gpdv fk6fouc fjoy568 figsok6 f1s184ao f1mk8lai fnbmjn9 f1o700av f13mvf36 f1cmlufx f9n3di6 f1ids18y f1tx3yz7 f1deo86v f1eh06m1 f1iescvh fhgqx19 f1olyrje f1p93eir f1nev41a f1h8hb77 f1lqvz6u f10aw75t fsle3fq f17ae5zn" title="https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/bluetooth/channel_sounding_ras_reflector/readme.html#channel-sounding-ras-reflector">信道探测反射器（含测距应答器）</a>示例已通过蓝牙认证，支持nRF Connect SDK v3.0.1及更高版本的DN。这意味着您可立即构建此示例，并与任何符合规范的信道探测发起方进行交互。

若设备支持蓝牙信道探测功能，大多数连接手机的嵌入式设备在此交互中将承担反射器角色。

### 开始使用信道探测

信道探测是nRF Connect SDK中SoftDevice Controller的一项功能，此外还提供了两个专用的信道探测示例应用程序：一个发起者（含信道探测请求方）和一个反射器（含信道探测响应方），这使您能够轻松地在两个nRF54L15开发套件上测试该功能。

要查看所有支持的模式和配置，请访问docs.nordicsemi.com上的<a href="https://docs.nordicsemi.com/bundle/ncs-latest/page/nrfxlib/softdevice_controller/doc/channel_sounding.html" target="_blank" rel="noopener">SoftDevice Controller文档</a>。

### **Channel Sounding用例**

* #### 升级标签

多年来，个人物品的标签对我们的生活有很大帮助，也改善了我们的生活。然而，在某些情况下，它们无法提供帮助，例如当钥匙或遥控器被深埋在沙发垫下时。解决用户离标签很近但仍然找不到标签的情况的常见方法是使用振动或声音。通过信道探测，这些情况可以通过基于距离测量的“冷热”指示来管理，甚至可以在垫下工作。

* #### 智能锁

可靠的存在检测和对中间人攻击和中继攻击的强大保护是智能锁的关键要求。当然，这些特性也可以增强或启用其他应用程序。

* #### 电器

存在或距离情境化可以显著改善用户体验。信道探测提供的物理上下文信息在涉及多个设备的场景中，以及在只有当用户靠近设备时才激活控制功能的安全特性中，特别有用。

* #### 资产跟踪

作为专业环境中高价值资产跟踪和项目查找的理想选择，信道探测增强了这些用例的可靠性，而不增加设计的复杂性。

* #### 有待探索

蓝牙的每一个主要功能，比如信道探测，都为全新的应用和产品带来了一系列可能性。

### 采用Channel Sounding

蓝牙信道探测的初步规范现在可以从蓝牙特别兴趣组(SIG)得到，最终的采用是市场高度期待的。

Nordic nRF54系列支持信道探测。我们的新产品[nRF54H20](/products/nrf54h20/)和[nRF54L15](/products/nrf54l15/)分别来自nRF54H和nRF54L系列。

### Nordic Distance Toolbox

{% image "/assets/images/channelsoundingdiagram23x.webp", "channel sounding", "100vw", "w-full h-full object-cover", "lazy" %}

**Nordic Distance Toolbox** 是一个专有的解决方案，作为一个信道探测的替代选择。它提供先进的距离测量和近距离感知能力，利用基于相位的测距(PBR)和往返时间(RTT)方法。附带的软件库包括一个算法，可以准确确定两个启用NDT的设备之间的距离，与仅基于接收信号强度指示器(RSSI)的解决方案相比，显著提高了准确性。这种提高的精度使以前仅靠RSSI无法实现的应用程序得以实现，在各个领域开辟了新的可能性。NDT支持nRF52和nRF53系列的特定SoC，使其成为开发人员的通用工具。

**nRF Connect SDK中的示例** 演示了Nordic Distance Toolbox的功能: <a href="https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/bluetooth/nrf_dm/README.html" target="_blank" rel="noopener">Bluetooth: nRF Distance Measurement with Bluetooth LE discovery</a>

## nRF54系列

### 新一代无线 SoC

nRF54L 系列将广受欢迎的 nRF52 系列提升到新的水平，专为下一代蓝牙 LE 产品而设计。它集成了新型超低功耗 2.4 GHz 无线电和多用途 MCU 功能，采用 128 MHz Arm Cortex-M33 处理器，处理能力翻倍，处理效率提高两倍。

nRF54L 系列中的三款无线 SoC 提供多种内存大小选择，最大 1.5 MB NVM，最大 256 KB RAM，适用于各种蓝牙 LE 应用。

## 低功耗蓝牙产品系列

<table>
        <thead>
            <tr>
                <th>
                    <p></p>
                </th>
                <th>
                    <p>nRF54H Series</p>
                </th>
                <th>
                    <p>nRF54L Series</p>
                </th>
                <th>
                    <p>nRF53 Series</p>
                </th>
                <th>
                    <p>nRF52 Series</p>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p></p>
                </td>
                <td>
                    <p><img alt="nRF54H_Logo_nobg_RGB.png" class="img-responsive" title="nRF54H Series Logo" src="https://nos-p-001.sitecorecontenthub.cloud/api/public/content/a4c34da3d41a4527bf74f478cfdedc88?v=4c158042" /></p>
                </td>
                <td>
                    <p><img alt="nRF54L_Logo_nobg_RGB.png" class="img-responsive" title="nRF54L Series Logo" src="https://nos-p-001.sitecorecontenthub.cloud/api/public/content/27e1e438ea19443599fdd99f2e765b75?v=7dd4e8be" /></p>
                </td>
                <td>
                    <p><img alt="nRF53-Series-logo-white-background.png" class="img-responsive" title="nRF53 Series Logo" src="https://nos-p-001.sitecorecontenthub.cloud/api/public/content/6d030b9cc0624697ab1540fff52c13f7?v=6afedeac" /></p>
                </td>
                <td>
                    <p><img alt="nRF52 Series logo_2.png" class="img-responsive" title="nRF52 Series Logo" src="https://nos-p-001.sitecorecontenthub.cloud/api/public/content/abab6c0921dd4674a2f0f0627d7aa61e?v=3bb8a0b6" /></p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>Wireless SoCs</strong></p>
                </td>
                <td>
                    <p><a href="https://www.nordicsemi.com/Products/nRF54H20">nRF54H20</a></p>
                </td>
                <td>
                    <p><a href="https://www.nordicsemi.com/Products/nRF54LM20A">nRF54LM20A</a>, <a href="https://www.nordicsemi.com/Products/nRF54L15">nRF54L15</a>, <a href="https://www.nordicsemi.com/Products/nRF54L10">nRF54L10</a>, <a href="https://www.nordicsemi.com/Products/nRF54L05">nRF54L05</a></p>
                </td>
                <td>
                    <p><a href="https://www.nordicsemi.com/Products/nRF5340">nRF5340</a></p>
                </td>
                <td>
                    <p><a href="https://www.nordicsemi.com/Products/nRF52840">nRF52840</a>, <a href="https://www.nordicsemi.com/Products/nRF52833">nRF52833</a>, <a href="https://www.nordicsemi.com/Products/nRF52832">nRF52832</a>, <a href="https://www.nordicsemi.com/Products/nRF52820">nRF52820</a>, <a href="https://www.nordicsemi.com/Products/nRF52811">nRF52811</a>, <a href="https://www.nordicsemi.com/Products/nRF52810">nRF52810</a>, <a href="https://www.nordicsemi.com/Products/nRF52805">nRF52805</a></p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>Processor</strong></p>
                </td>
                <td>
                    <p>2x Arm Cortex-M33,<br />up to 320 MHz</p>
                </td>
                <td>
                    <p>128 MHz Arm Cortex-M33</p>
                </td>
                <td>
                    <p>2x Arm Cortex-M33, up to 128 MHz</p>
                    <p></p>
                </td>
                <td>
                    <p>64 MHz Arm Cortex-M4</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>NVM</strong></p>
                </td>
                <td>
                    <p>2 MB</p>
                </td>
                <td>
                    <p>Up to 2.0 MB</p>
                </td>
                <td>
                    <p>1 MB + 256 KB</p>
                </td>
                <td>
                    <p>Up to 1 MB</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>RAM</strong></p>
                </td>
                <td>
                    <p>1 MB</p>
                </td>
                <td>
                    <p>Up to 512KB</p>
                </td>
                <td>
                    <p>512 KB + 64 KB</p>
                </td>
                <td>
                    <p>Up to 256 KB</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>Bluetooth LE</strong></p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>Bluetooth Channel Sounding</strong></p>
                </td>
                <td>
                    <p>Yes, pending software</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>TX power</strong></p>
                </td>
                <td>
                    <p>10 dBm</p>
                </td>
                <td>
                    <p>Up to 8 dBm</p>
                </td>
                <td>
                    <p>3 dBm</p>
                </td>
                <td>
                    <p>Up to 8 dBm</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>RX sensitivity</strong></p>
                </td>
                <td>
                    <p>-100 dBm</p>
                </td>
                <td>
                    <p>-96 dBm</p>
                </td>
                <td>
                    <p>-98 dBm</p>
                </td>
                <td>
                    <p>Down to -97 dBm</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>RISC-V coprocessor</strong></p>
                </td>
                <td>
                    <p>320 MHz FLPR + 16 MHz PPR</p>
                </td>
                <td>
                    <p>128 MHz FLPR</p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>Standard peripherals and interfaces</strong></p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>Highlighted digital interfaces</strong></p>
                </td>
                <td>
                    <p>High-speed SPI/UART, high-speed USB, QSPI, CAN-FD, EXMIF</p>
                </td>
                <td>
                    <p>High-speed SPI/UART, high-speed USB, sQSPI (SoftwarePeripheral)</p>
                </td>
                <td>
                    <p>High-speed SPI, full-speed USB, QSPI</p>
                </td>
                <td>
                    <p>High-speed SPI, full-speed USB, QSPI</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>Highlighted peripherals</strong></p>
                </td>
                <td>
                    <p>14-bit ADC, Global RTC</p>
                </td>
                <td>
                    <p>14-bit ADC, Global RTC</p>
                </td>
                <td>
                    <p>12-bit ADC</p>
                </td>
                <td>
                    <p>12-bit ADC</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>Isolation</strong></p>
                </td>
                <td>
                    <p>Secure Domain and TrustZone</p>
                </td>
                <td>
                    <p>TrustZone</p>
                </td>
                <td>
                    <p>TrustZone</p>
                </td>
                <td>
                    <p></p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>Cryptographic accelerator</strong></p>
                </td>
                <td>
                    <p>Yes, with side-channel leakage protection</p>
                </td>
                <td>
                    <p>Yes, with side-channel leakage protection</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>Tamper detectors</strong></p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>GPIOs</strong></p>
                </td>
                <td>
                    <p>64</p>
                </td>
                <td>
                    <p>Up to 66</p>
                </td>
                <td>
                    <p>48</p>
                </td>
                <td>
                    <p>Up to 48</p>
                </td>
            </tr>
        </tbody>
    </table>

## 产品概览网络研讨会

{% youtubeVideo, "https://www.youtube.com/embed/ey9ANU1dXWs" %}

## nRF53和nRF52系列低功耗蓝牙SoC

<table>
        <thead>
            <tr>
                <th>
                    <p></p>
                </th>
                <th>
                    <p><a href="/products/nrf5340/"><strong>nRF5340</strong></a></p>
                </th>
                <th>
                    <p><a href="/products/nrf52840/"><strong>nRF52840</strong></a></p>
                </th>
                <th>
                    <p><a href="/products/nrf52833/"><strong>nRF52833</strong></a></p>
                </th>
                <th>
                    <p><a href="/products/nrf52832/"><strong>nRF52832</strong></a></p>
                </th>
                <th>
                    <p><a href="/products/nrf52820/"><strong>nRF52820</strong></a></p>
                </th>
                <th>
                    <p><a href="/products/nrf52811/"><strong>nRF52811</strong></a></p>
                </th>
                <th>
                    <p><a href="/products/nrf52810/"><strong>nRF52810</strong></a></p>
                </th>
                <th>
                    <p><a href="/products/nrf52805/"><strong>nRF52805</strong></a></p>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p><strong>CPU</strong></p>
                </td>
                <td>
                    <p>128 MHz Arm Cortex-M33<br />+<br />64 MHz Arm Cortex-M33</p>
                </td>
                <td>
                    <p>64 MHz Arm Cortex-M4 with FPU</p>
                </td>
                <td>
                    <p>64 MHz Arm Cortex-M4 with FPU</p>
                </td>
                <td>
                    <p>64 MHz Arm Cortex-M4 with FPU</p>
                </td>
                <td>
                    <p>64 MHz Arm Cortex-M4</p>
                </td>
                <td>
                    <p>64 MHz Arm Cortex-M4</p>
                </td>
                <td>
                    <p>64 MHz Arm Cortex-M4</p>
                </td>
                <td>
                    <p>64 MHz Arm Cortex-M4</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>Flash</strong></p>
                </td>
                <td>
                    <p>1 MB<br />+<br />256 KB</p>
                </td>
                <td>
                    <p>1 MB</p>
                </td>
                <td>
                    <p>512 KB</p>
                </td>
                <td>
                    <p>512/256 KB</p>
                </td>
                <td>
                    <p>256 KB</p>
                </td>
                <td>
                    <p>192 KB</p>
                </td>
                <td>
                    <p>192 KB</p>
                </td>
                <td>
                    <p>192 KB</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>RAM</strong></p>
                </td>
                <td>
                    <p>512 KB<br />+<br />64 KB</p>
                </td>
                <td>
                    <p>256 KB</p>
                </td>
                <td>
                    <p>128 KB</p>
                </td>
                <td>
                    <p>64/32 KB</p>
                </td>
                <td>
                    <p>32 KB</p>
                </td>
                <td>
                    <p>24 KB</p>
                </td>
                <td>
                    <p>24 KB</p>
                </td>
                <td>
                    <p>24 KB</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>Arm TrustZone</strong></p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>Arm CryptoCell</strong></p>
                </td>
                <td>
                    <p>312</p>
                </td>
                <td>
                    <p>310</p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>Root-of-Trust</strong></p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>Secure key storage</strong></p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>High-Speed SPI</strong></p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>TWI/SPI/UART</strong></p>
                </td>
                <td>
                    <p>4xTWI/SPI/UART +TWI/SPI/UART</p>
                </td>
                <td>
                    <p>2xTWI/SPI, SPI, 2xUART</p>
                </td>
                <td>
                    <p>2xTWI/SPI, SPI, 2xUART</p>
                </td>
                <td>
                    <p>2xTWI/SPI, SPI, UART</p>
                </td>
                <td>
                    <p>2xTWI/SPI, UART</p>
                </td>
                <td>
                    <p>TWI/SPI, SPI, UART</p>
                </td>
                <td>
                    <p>TWI, SPI, UART</p>
                </td>
                <td>
                    <p>TWI, SPI, UART</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>QSPI</strong></p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>USB</strong></p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p></p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>PWM, PDM, I2S</strong></p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p></p>
                </td>
                <td>
                    <p>PWM, PDM</p>
                </td>
                <td>
                    <p>PWM, PDM</p>
                </td>
                <td>
                    <p></p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>ADC, Comparator</strong></p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>Yes</p>
                </td>
                <td>
                    <p>COMP</p>
                </td>
                <td>
                    <p>ADC, COMP</p>
                </td>
                <td>
                    <p>ADC, COMP</p>
                </td>
                <td>
                    <p>ADC</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>Operating temperature</strong></p>
                </td>
                <td>
                    <p>-40 to 105 °C</p>
                </td>
                <td>
                    <p>-40 to 85 °C</p>
                </td>
                <td>
                    <p>-40 to 105 °C</p>
                </td>
                <td>
                    <p>-40 to 85 °C</p>
                </td>
                <td>
                    <p>-40 to 105 °C</p>
                </td>
                <td>
                    <p>-40 to 85 °C</p>
                </td>
                <td>
                    <p>-40 to 85 °C</p>
                </td>
                <td>
                    <p>-40 to 85 °C</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>Supply voltage range</strong></p>
                </td>
                <td>
                    <p>1.7 to 5.5 V</p>
                </td>
                <td>
                    <p>1.7 to 5.5 V</p>
                </td>
                <td>
                    <p>1.7 to 5.5 V</p>
                </td>
                <td>
                    <p>1.7 to 3.6 V</p>
                </td>
                <td>
                    <p>1.7 to 5.5 V</p>
                </td>
                <td>
                    <p>1.7 to 3.6 V</p>
                </td>
                <td>
                    <p>1.7 to 3.6 V</p>
                </td>
                <td>
                    <p>1.7 to 3.6 V</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><strong>Packages</strong></p>
                </td>
                <td>
                    <p>7x7 mm aQFN94<br />(48 GPIOs)<br /><br />4.4x4.0 mm WLCSP95<br />(48 GPIOs)</p>
                </td>
                <td>
                    <p>7x7 mm aQFN73<br />(48 GPIOs)<br /><br />3.5x3.6 mm WLCSP94<br />(48 GPIOs)</p>
                </td>
                <td>
                    <p>7x7 mm aQFN73<br />(42 GPIOs)<br /><br />5x5 mm QFN40<br />(18 GPIOs)<br /><br />3.2x3.2 mm WLCSP<br />(42 GPIOs)</p>
                </td>
                <td>
                    <p>6x6 mm QFN48<br />(32 GPIOs)<br /><br />3.0x3.2 mm WLCSP50<br />(32 GPIOs)</p>
                </td>
                <td>
                    <p>5x5 mm QFN40 (18 GPIOs)</p>
                </td>
                <td>
                    <p>6x6 mm QFN48<br />(32 GPIOs)<br /><br />5x5 mm QFN32<br />(17 GPIOs)<br /><br />2.48x2.46 mm WLCSP33<br />(15 GPIOs)</p>
                </td>
                <td>
                    <p>6x6 mm QFN48<br />(32 GPIOs)<br /><br />5x5 mm QFN32<br />(16 GPIOs)<br /><br />2.48x2.46 mm WLCSP33<br />(15 GPIOs)</p>
                </td>
                <td>
                    <p>2.48x2.46 mm WLCSP28<br />(10 GPIOs)</p>
                </td>
            </tr>
        </tbody>
    </table>

## 开发硬件

## 单板开发套件

我们提供单板开发套件，包含在我们的SoC上开始开发所需的一切。这些套件使您可以使用SoC的所有功能和GPIOs，包括NFC。所有套件都有LED和按钮，使您能够获得输出和输入。所有套件都配备了机载SEGGER J-Link调试器，使SoC的编程和调试成为可能。

我们还提供nRF52840加密狗。它是nRF Connect for Desktop工具的补充硬件。它仍然支持低功耗蓝牙、蓝牙mesh、Thread和Zigbee。当进行大规模测试或尺寸很重要时，它可以是一种低成本的选择。请注意，它没有SEGGER J-Link调试器。我们建议购买合适的开发套件进行开发。

对于nRF52832和nRF5340 SoC，我们提供了易于使用的原型平台，f分别是Nordic Thingy:52和Thingy:53。它们被设计用来帮助构建原型和示例，而不需要构建硬件甚至编写固件。请注意，它没有SEGGER J-Link调试器。

我们还建议你看看[Power Profiler Kit II (ppk2)](/tools/ppk2/)。ppk2是一个工具，你可以使用它来衡量我们所有开发套件、原型平台和你自己的设计(从sub-uA到1a)的电流消耗。

## 开发软件

## 优秀的硬件需要优秀的软件

优秀的硬件需要优秀的软件。我们为 nRF53 和 nRF52 系列提供了 [nRF Connect SDK](/tools/nrfconnectsdk/)，这是一个用于开发蓝牙低功耗应用的完整软件开发工具包。它集成了可扩展的 Zephyr 实时操作系统、功能丰富的蓝牙 LE 协议栈、各种示例、硬件驱动程序等。

我们已将软设备的底层移植到 nRF Connect SDK，并带来了软设备所特有的一流互操作性。这就是软设备控制器（SoftDevice Controller）。SoftDevice 控制器与 Zephyr 蓝牙主机相结合，形成了功能丰富的蓝牙 LE 协议栈。该协议栈兼容所有 nRF52 和 nRF53 系列 SoC，支持广播器、外设、观察器和中心角色。它是符合蓝牙 5.2 标准的协议栈，支持 2 Mbps、广告扩展、信道选择算法 \#2 和长距离。它还支持隐私 1.2、LE 数据包长度扩展、可配置 ATT MTU、面向连接的 L2CAP 信道和 LE Secure Connections。

nRF5 SDK仍然可以与nRF52系列一起使用，但处于维护模式。对于所有新项目，我们推荐使用[nRF Connect SDK](/tools/nrfconnectsdk/)。

## 开发工具

## 激发所有开发人员的热情

当 Nordic Semiconductor 进入低功耗蓝牙领域时，我们有一些非常明确的目标。一个目标是成为市场领导者，另一个目标是使 Nordic 低功耗蓝牙 SoC 成为市场上最容易获得、最易于使用、支持最完善的设备。今天的初创企业可以成为物联网领域的下一个行业巨头。我们生产人人都能买得起的开发硬件。并辅以免费软件和开发工具。Nordic 希望能激发所有开发人员的热情。

以下是开发低功耗蓝牙产品时所有相关开发工具的完整概述。我们首先列出了所有桌面端的开发工具，然后是移动应用程序。

### 桌面端开发工具：

* [nRF Connect for Desktop](/tools/nrf-connect-for-desktop/)
* [nRF Command Line Tools](/tools/nrfcommandlinetools/)
* <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Sniffer-for-Bluetooth-LE" target="_blank" rel="noopener">nRF Sniffer for Bluetooth LE</a>
* <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Pynrfjprog" target="_blank" rel="noopener">nRF Pynrfjprog</a>
* [nRF Util](https://www.nordicsemi.com/Products/Development-tools/nRF-Util)

### 移动应用程序：

* <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-mobile" target="_blank" rel="noopener">nRF Connect for Mobile</a>
* <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Blinky" target="_blank" rel="noopener">nRF Blinky</a>
* <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Toolbox" target="_blank" rel="noopener">nRF Toolbox</a>
* <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-Device-Manager" target="_blank" rel="noopener">nRF Connect Device Manager</a>
* [nRF Edge Impulse](/tools/nrf-edge-impulse/)
* <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Programmer" target="_blank" rel="noopener">nRF Programmer</a>
* <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Mesh" target="_blank" rel="noopener">nRF Mesh</a>
* <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Device-Firmware-Update" target="_blank" rel="noopener">nRF Device Firmware Update</a>
* <a href="https://www.nordicsemi.com/Products/Development-tools/Nordic-Thingy-52-App" target="_blank" rel="noopener">Thingy:52</a>

## 最新的蓝牙认证程序更新

蓝牙技术联盟（Bluetooth SIG）最新的认证程序参考文件（QPRD）v3 已于 2024 年 7 月 1 日生效。为支持新流程，Qualification Workspace（一个旨在促进和简化蓝牙认证流程的新工具）现已向蓝牙技术联盟的所有成员开放。如需了解改进后的流程和 Qualification Workspace 工具演示，请浏览 "<a href="https://www.bluetooth.com/bluetooth-resources/qprd-webinar/" target="_blank" rel="noopener">新蓝牙认证流程和工具介绍</a>"。